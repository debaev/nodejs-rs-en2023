import { constants } from 'buffer';
import { access, unlink } from 'fs/promises';
import { resolve } from 'path';

export default async function rm(currentDir, pathToFile) {
  try {
    await access(resolve(currentDir, pathToFile), constants.R_OK | constants.W_OK);
    await unlink(resolve(currentDir, pathToFile));
  } catch (error) {
    throw Error;
  }
};