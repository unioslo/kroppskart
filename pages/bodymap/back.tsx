import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { back } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function Back() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={back} />
      <Navigator />
    </main>
  );
}
