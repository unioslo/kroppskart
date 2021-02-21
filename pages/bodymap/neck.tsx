import MapContainer from '../../src/components/bodyMaps/MapContainer';
import bodyMaps from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function Neck() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={bodyMaps.neck} />
    </div>
  );
}
