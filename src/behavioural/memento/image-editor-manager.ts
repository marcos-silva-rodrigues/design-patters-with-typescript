import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log('Backup');
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log('Backup: restaurado');
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
