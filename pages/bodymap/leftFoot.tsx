import MapContainer from '../../src/components/bodyMaps/MapContainer';
import leftFoot from '../../src/components/bodyMaps/mapData/leftFootMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function LeftFoot() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={leftFoot} />
      <Navigator />
    </main>
  );
}
