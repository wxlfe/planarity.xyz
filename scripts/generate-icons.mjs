import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "public", "icon-source.svg");
const publicDir = join(root, "public");

const pngTargets = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512]
];

await mkdir(publicDir, { recursive: true });

const svg = await readFile(source);

await copyFile(source, join(publicDir, "favicon.svg"));

for (const [filename, size] of pngTargets) {
  await sharp(svg).resize(size, size).png().toFile(join(publicDir, filename));
}

const ico = await pngToIco([
  join(publicDir, "favicon-16x16.png"),
  join(publicDir, "favicon-32x32.png")
]);

await writeFile(join(publicDir, "favicon.ico"), ico);
