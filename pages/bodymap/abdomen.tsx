import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { abdomen } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function Abdomen() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={abdomen} />
    </div>
  );
}
