import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { abdomen } from '../../src/components/bodyMaps/mapData';

export default function Abdomen() {
  return (
    <div className="container">
      <MapContainer map={abdomen} />
    </div>
  );
}
