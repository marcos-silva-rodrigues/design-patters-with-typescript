import { ImageEditor } from './image-editor';
import { ImageEditorManager } from './image-editor-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorManager(imageEditor);

imageEditor.convertFormatTo('jpg');
backupManager.backup();
backupManager.showMementos();
console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
