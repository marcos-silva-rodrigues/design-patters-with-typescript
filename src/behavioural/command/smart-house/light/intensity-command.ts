import { SmartHouseLight } from '.';
import { SmartHouseCommand } from '../command';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
}
