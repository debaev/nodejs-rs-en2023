import { pipeline } from "stream/promises";
import { createBrotliCompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";

export default async function compress(currentDir, srcPath, destPath) {
  const srcFilePath = resolve(currentDir, srcPath);
  const compressedFilePath = resolve(currentDir, destPath, `${srcPath}.br`);
  await pipeline(createReadStream(srcFilePath), createBrotliCompress(), createWriteStream(compressedFilePath));
};