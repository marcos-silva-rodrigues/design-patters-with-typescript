import { IDevice } from '../devices';

export class RemoteControl {
  constructor(protected device: IDevice) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
