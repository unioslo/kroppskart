import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { back } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function Back() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={back.default} />
    </div>
  );
}
