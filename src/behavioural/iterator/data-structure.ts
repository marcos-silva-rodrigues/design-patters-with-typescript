import { MyDefaultIterator } from './default';
import { MyIteratorProtocol } from './protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    this._items.push(...items);
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this._items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    this.iterator.reset();
    return this.iterator;
  }
}
