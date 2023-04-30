import { readFile } from "fs/promises";
import { resolve } from "path";
import { createHash } from "crypto";
import { errMSGs } from "../../utils/constants.js";

export default async function handleHashCalculations(currentDir, srcFilePath) {
  try {
    const fileContent = await readFile(resolve(currentDir, srcFilePath));
    console.log(createHash('sha256').update(fileContent).digest('hex'));
  } catch (_) {
    console.log(errMSGs.operationFailed);
  }
}