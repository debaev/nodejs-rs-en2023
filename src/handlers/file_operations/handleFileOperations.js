import cat from "./handlers/cat.js";
import add from "./handlers/add.js";
import rn from "./handlers/rn.js";
import cp from "./handlers/cp.js";
import mv from "./handlers/mv.js";
import rm from "./handlers/rm.js";
import { errMSGs } from "../../utils/constants.js";

export default async function handleFileOperations(command, currentDir, srcPath, destPath) {
  try {
    if (command === 'cat') await cat(currentDir, srcPath);
    else if (command === 'add') await add(currentDir, srcPath);
    else if (command === 'rn') await rn(currentDir, srcPath, destPath);
    else if (command === 'cp') await cp(currentDir, srcPath, destPath);
    else if (command === 'mv') await mv(currentDir, srcPath, destPath);
    else if (command === 'rm') await rm(currentDir, srcPath);
  } catch (_) {
    console.log(errMSGs.operationFailed);
  }
}