import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { abdomen } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function Abdomen() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={abdomen} />
      <Navigator />
    </main>
  );
}
