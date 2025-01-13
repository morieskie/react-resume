import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import * as Csso from "csso";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.copy("src/assets/data", "public/data", (err: any) => {
  if (err) return console.error(err);
  console.log("Data copied successfully!");
});

fs.copy("src/assets/images", "public/assets/images", (err: any) => {
  if (err) return console.error(err);
  console.log("Images copied successfully!");
});

fs.copy("src/assets/css/theme", "public/assets/css", (err: any) => {
  if (err) return console.error(err);
  console.log("Theme CSS copied successfully!");
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
