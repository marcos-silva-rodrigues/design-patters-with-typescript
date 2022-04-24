import { SmartHouseApp } from './smart-house';
import {
  LightIntensityCommand,
  LightPowerCommand,
  SmartHouseLight,
} from './smart-house/light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
const lightIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.addCommand('btn-2', lightIntensityCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');
