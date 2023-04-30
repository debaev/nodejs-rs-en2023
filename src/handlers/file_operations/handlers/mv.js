import cp from "./cp.js";
import rm from "./rm.js";

export default async function mv(currentDir, srcPath, destPath) {
    await cp(currentDir, srcPath, destPath);
    rm(currentDir, srcPath);
};