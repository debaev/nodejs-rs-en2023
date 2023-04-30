export default async function up(currentDir) {
  process.chdir(currentDir);
  process.chdir('..');
  return process.cwd();
}

