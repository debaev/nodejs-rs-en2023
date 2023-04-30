export default async function cd(currentDir, option) {
  process.chdir(currentDir);
  process.chdir(option);
  console.log(option);
  console.log(process.cwd());
  return process.cwd();
}
