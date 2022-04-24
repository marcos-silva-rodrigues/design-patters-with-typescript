import { MyDataStructure } from './data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F', 'G');
console.log(dataStructure);

const [a, b] = dataStructure;
console.log('ROUBADOS', a, b);

for (const data of dataStructure) {
  console.log(data);
}

console.log('não possui mais valores');
for (const data of dataStructure) {
  console.log(data);
}
