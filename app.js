const app = async () => {
  const username = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')?.[1] || 'guest';
  console.log(`Welcome to the File Manager, ${username}!`);
  const __dirname = import.meta.dirname;
  console.log(`You are currently in ${__dirname}`);
  console.log('Please print your command and wait for results...');

  process.stdin.on('data', async (chunk) => {
    const inputStr = chunk.toString().trim();
    if (inputStr === ".exit") {
      process.exit();
    }
  })
  process.on('SIGINT', () => process.exit());
  process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));
};

await app();
