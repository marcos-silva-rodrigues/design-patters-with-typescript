import { RemoteControl } from '.';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} tinha volume ${oldVolume} agora tem ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} tinha volume ${oldVolume} agora tem ${this.device.getVolume()}`,
    );
  }
}
