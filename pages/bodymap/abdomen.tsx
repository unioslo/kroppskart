import MapContainer from '../../src/components/bodyMaps/MapContainer';
import abdomenMap from '../../src/components/bodyMaps/mapData/abdomenMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function Abdomen() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={abdomenMap} />
      <Navigator />
    </main>
  );
}
