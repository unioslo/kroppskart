import MapContainer from '../../src/components/MapContainer';
import rightArmMap from '../../src/components/MapContainer/mapData/rightArmMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function RightArm() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightArmMap} />
      <Navigator />
    </main>
  );
}
