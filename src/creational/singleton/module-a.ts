import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

// ts version
// const myDatabaseClassic = MyDatabaseClassic.instance();

// js version
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Fulano', age: 20 });
myDatabaseClassic.add({ name: 'Ciclano', age: 21 });

myDatabaseClassic.show();

export { myDatabaseClassic };
