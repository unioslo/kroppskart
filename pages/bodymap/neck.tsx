import MapContainer from '../../src/components/MapContainer';
import neckMap from '../../src/components/MapContainer/mapData/neckMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function Neck() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={neckMap} />
      <Navigator />
    </main>
  );
}
