import MapContainer from '../../src/components/bodyMaps/MapContainer';
import rightArmMap from '../../src/components/bodyMaps/mapData/rightArmMap';
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
