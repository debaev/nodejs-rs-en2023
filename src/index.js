import { homedir } from "os";
import { getUserName, handleCommandLine, handleFileOperations, handleHashCalculations, handleNWDOperations, handleOSOperations } from "./utils/index.js";
import handleCompressDecompress from "./handlers/compress_decompress/handleCompressDecompress.js";

const initFileManager = () => {
  const username = getUserName();
  let currentDir = homedir();

  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${currentDir}`);

  process.stdin.on('data', async data => {
    const [command, option, option2] = handleCommandLine(data);

    if (['up', 'cd', 'ls'].includes(command)) currentDir = await handleNWDOperations(command, option, currentDir);
    else if (['cat', 'add', 'rn', 'cp', 'mv', 'rm'].includes(command)) await handleFileOperations(command, currentDir, option, option2);
    else if (['os'].includes(command)) handleOSOperations(option);
    else if (['hash'].includes(command)) handleHashCalculations(currentDir, option);
    else if (['compress', 'decompress'].includes(command)) await handleCompressDecompress(command, currentDir, option, option2);
    else console.log('Invalid input');

    console.log(`You are currently in ${currentDir}`);
  });

  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  });
};

initFileManager();