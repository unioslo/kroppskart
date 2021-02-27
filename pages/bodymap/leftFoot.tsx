import MapContainer from '../../src/components/MapContainer';
import leftFoot from '../../src/components/MapContainer/mapData/leftFootMap';
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
