import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a';

// ts version
// const myDatabaseClassic = MyDatabaseClassic.instance();

// js version
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Outro Fulano', age: 20 });
myDatabaseClassic.add({ name: 'Outro Ciclano', age: 21 });

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
