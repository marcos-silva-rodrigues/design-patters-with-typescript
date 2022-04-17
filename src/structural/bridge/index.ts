import { Radio } from './devices/radio';
import { Tv } from './devices/tv';
import { RemoteControl } from './remote-control';
import { RemoteControlWithVolume } from './remote-control/with-volume';

function client(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(radio);
client(radioRemoteControl);
client(tvRemoteControl);
