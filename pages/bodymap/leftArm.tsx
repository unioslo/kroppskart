import MapContainer from '../../src/components/MapContainer';
import leftArmMap from '../../src/components/MapContainer/mapData/leftArmMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function LeftArm() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={leftArmMap} />
      <Navigator />
    </main>
  );
}
