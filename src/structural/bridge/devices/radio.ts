import { IDevice } from '.';

export class Radio implements IDevice {
  private volume = 10;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (0 < volume && volume > 100) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
