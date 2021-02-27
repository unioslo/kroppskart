import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import headMap from '../../src/components/bodyMaps/mapData/headMap';

export default function HeadJawMouth() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={headMap} />
      <Navigator />
    </main>
  );
}
