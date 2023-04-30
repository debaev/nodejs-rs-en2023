import { resolve } from 'path';
import { writeFile } from 'fs/promises';

export default async function add(currentDir, srcPath) {
	writeFile(resolve(currentDir, srcPath), '');
};
