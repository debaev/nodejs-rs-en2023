import { createReadStream } from "fs";
import { access, constants } from "fs/promises";
import { EOL } from "os";
import { resolve } from "path";

export default async function cat(currentDir, path) {
    try {
        await access(resolve(currentDir, path), constants.R_OK | constants.W_OK);
        const readStream = createReadStream(resolve(currentDir, path), 'utf8');
        readStream.on('data', chunk => process.stdout.write(chunk));
        readStream.on('end', () => process.stdout.write(EOL));
    } catch (error) {
        throw Error;
    }
};