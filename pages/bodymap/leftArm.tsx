import MapContainer from '../../src/components/bodyMaps/MapContainer';
import leftArmMap from '../../src/components/bodyMaps/mapData/leftArmMap';
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
