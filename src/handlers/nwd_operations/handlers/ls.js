import { readdir } from 'fs';

export default function ls(currentDir) {
  readdir(currentDir, { withFileTypes: true }, (_, dirEntries) => {
    const content = dirEntries.map((dirEntry) => ({
      name: dirEntry.name,
      type: dirEntry.isDirectory() ? 'directory' : 'file'
    }));
    console.table(content);
    console.log(`You are currently in ${currentDir}`);
  });
};