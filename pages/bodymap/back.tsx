import MapContainer from '../../src/components/bodyMaps/MapContainer';
import backMap from '../../src/components/bodyMaps/mapData/backMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function Back() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={backMap} />
      <Navigator />
    </main>
  );
}
