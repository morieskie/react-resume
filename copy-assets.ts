import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import * as Csso from "csso";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_FOLDER = "public";

fs.copy("src/assets/data", `${PUBLIC_FOLDER}/data`, (err: any) => {
  if (err) return console.error(err);
  console.log("Data copied successfully!");
  const jsonFiles = glob.sync(
    path.join(__dirname, `${PUBLIC_FOLDER}/data/**/*.json`)
  );

  jsonFiles.forEach((file) => {
    try {
      // Read the JSON file
      const source = fs.readFileSync(file, "utf8");

      // Parse and stringify the JSON to remove unnecessary whitespace
      const minified = JSON.stringify(JSON.parse(source));

      // Write the minified JSON back to the file
      fs.writeFileSync(file, minified, "utf8");

      console.log(`Minified JSON: ${file}`);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });
});

fs.copy("src/assets/images", `${PUBLIC_FOLDER}/assets/images`, (err: any) => {
  if (err) return console.error(err);
  console.log("Images copied successfully!");
});

fs.copy("src/assets/css/theme", `${PUBLIC_FOLDER}/assets/css`, (err: any) => {
  if (err) return console.error(err);
  console.log("Theme CSS copied successfully!");
  const cssFiles = glob.sync(
    path.join(__dirname, `${PUBLIC_FOLDER}/assets/css/**/*.css`)
  );

  cssFiles.forEach((file) => {
    const source = fs.readFileSync(file, "utf8");
    const minified = Csso.minify(source).css;
    fs.writeFileSync(file, minified, "utf8");
    console.log(`Minified CSS: ${file}`);
  });
});
