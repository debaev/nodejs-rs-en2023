import { EOL, arch, cpus, homedir, userInfo } from "os";
import { errMSGs } from "../../utils/constants.js";

export default function handleOSOperations(option) {
  switch (option) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;

    case '--cpus':
      console.table(cpus());
      break;

    case '--homedir':
      console.log(homedir());
      break;

    case '--username':
      console.log(userInfo().username);
      break;

    case '--architecture':
      console.log(arch());
      break;

    default:
      console.log(errMSGs.operationFailed);
      break;
  }
}