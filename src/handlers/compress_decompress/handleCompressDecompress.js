import compress from "./handlers/compress.js";
import decompress from "./handlers/decompress.js";
import { errMSGs } from "../../utils/constants.js";

export default async function handleCompressDecompress(command, currentDir, option, option2) {
  try {
    if (command === 'compress') await compress(currentDir, option, option2);
    else if (command === 'decompress') await decompress(currentDir, option, option2);
  } catch (_) {
    console.log(errMSGs.operationFailed);
  }
}