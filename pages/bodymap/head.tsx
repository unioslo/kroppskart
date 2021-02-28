import MapContainer from '../../src/components/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import headMap from '../../src/components/MapContainer/mapData/headMap';

export default function Head() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={headMap} />
      <Navigator />
    </main>
  );
}
