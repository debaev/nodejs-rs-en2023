export default function getUserName() {
  const args = process.argv.slice(2);
  const username = args[0]?.split('=')[1];

  return username ? username : 'stranger';
};