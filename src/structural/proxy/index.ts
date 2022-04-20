import { UserProxy } from './system/proxy';

const user = new UserProxy('marcos', 'marcos.silv@');

async function main() {
  console.log('2 seg');
  console.log(await user.getAddresses());

  for (let i = 0; i < 5; i++) {
    console.log('more 2 seg');
    console.log(await user.getAddresses());
  }
}

main();
