import path from "path";
import { fileURLToPath } from "url";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
    fallback: {
      os: require.resolve("os-browserify/browser"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true, // Ensure minification is enabled
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Optional: Remove console logs
          },
          output: {
            beautify: false, // Make sure output is one line
            comments: false, // Remove comments
          },
        },
      }),
      // Minimize CSS with CssMinimizerPlugin
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"), // Source folder
          to: path.resolve(__dirname, "public/assets/images"), // Destination folder
        },
        {
          from: path.resolve(__dirname, "src/assets/data"), // Source folder
          to: path.resolve(__dirname, "public/assets/data"), // Destination folder
        },
        {
          from: path.resolve(__dirname, "src/assets/css/theme"), // Source folder
          to: path.resolve(__dirname, "public/assets/css"), // Destination folder
          globOptions: {
            dot: true,
            gitignore: true,
          },
        },
      ],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("MinifyCopiedFiles", (compilation) => {
          // Minify JS files
          const jsFiles = glob.sync(
            path.join(__dirname, "public/assets/js/**/*.js")
          );
          jsFiles.forEach((file) => {
            const source = fs.readFileSync(file, "utf8");
            const minified = Terser.minify(source);
            if (minified.error) {
              console.error(`Error minifying JS: ${file}`, minified.error);
            } else {
              fs.writeFileSync(file, minified.code, "utf8");
              console.log(`Minified JS: ${file}`);
            }
          });

          // Minify CSS files
          const cssFiles = glob.sync(
            path.join(__dirname, "public/assets/css/**/*.css")
          );
          cssFiles.forEach((file) => {
            const source = fs.readFileSync(file, "utf8");
            const minified = Csso.minify(source).css;
            fs.writeFileSync(file, minified, "utf8");
            console.log(`Minified CSS: ${file}`);
          });
        });
      },
    },
  ],
};
