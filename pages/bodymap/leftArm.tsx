import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftArm } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function LeftArm() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={leftArm} />
      <Navigator />
    </main>
  );
}
