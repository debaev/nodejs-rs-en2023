import ls from "./handlers/ls.js";
import up from "./handlers/up.js";
import cd from "./handlers/cd.js";
import { errMSGs } from "../../utils/constants.js";

export default async function handleNWDOperations(command, option, currentDir) {
  let changedPath = '';
  try {
    if (command === 'up') changedPath = await up(currentDir);
    else if (command === 'ls') ls(currentDir);
    else if (command === 'cd' && !!option) changedPath = await cd(currentDir, option);
  } catch (_) {
    console.log(errMSGs.operationFailed);
  }
  return changedPath || currentDir;
}