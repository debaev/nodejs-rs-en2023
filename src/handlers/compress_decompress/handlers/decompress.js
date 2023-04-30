import { pipeline } from "stream/promises";
import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { parse, resolve } from "path";

export default async function decompress(currentDir, srcPath, destPath) {
  const { name, ext } = parse(srcPath);
  const compressedFilePath = resolve(currentDir, srcPath);
  const destFilePath = resolve(currentDir, destPath, `${name}`);
  await pipeline(createReadStream(compressedFilePath), createBrotliDecompress(), createWriteStream(destFilePath));
};