import { up } from './modules/nwd/up.js';
import { cd } from './modules/nwd/cd.js';
import { ls } from './modules/nwd/ls.js';

const app = async () => {
  const username = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')?.[1] || 'guest';
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${process.cwd()}`);
  console.log('Please print your command and wait for results...');

  process.stdin.on('data', async (chunk) => {
    const inputStr = chunk.toString().trim();
    if (inputStr === 'up') {
      up();
      console.log(`You are currently in ${process.cwd()}`);
    } else if (inputStr.startsWith('cd ')) {
      cd(inputStr.slice(3));
      console.log(`You are currently in ${process.cwd()}`);
    } else if (inputStr === 'ls') {
      ls();
      console.log(`You are currently in ${process.cwd()}`);
    } else if (inputStr === '.exit') {
      process.exit();
    }
  })
  process.on('SIGINT', () => process.exit());
  process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));
};

await app();
