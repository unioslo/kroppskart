import MapContainer from '../../src/components/bodyMaps/MapContainer';
import neckMap from '../../src/components/bodyMaps/mapData/neckMap';
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
