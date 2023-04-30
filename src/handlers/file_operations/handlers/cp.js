import { createReadStream, createWriteStream } from "fs";
import { access, constants } from "fs/promises";
import { resolve } from "path";

export default async function cp(currentDir, srcPath, destPath) {
    try {
        await access(resolve(currentDir, srcPath), constants.R_OK | constants.W_OK);
        await access(resolve(currentDir, destPath), constants.R_OK | constants.W_OK);
        const fileToCopy = createReadStream(resolve(currentDir, srcPath));
        const destFilePath = createWriteStream(resolve(currentDir, destPath, srcPath));

        fileToCopy.pipe(destFilePath);
    } catch (error) {
        throw Error;
    }
};