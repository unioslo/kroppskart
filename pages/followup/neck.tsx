import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { neck } from '../../src/components/bodyMaps/mapData';

export default function Neck() {
  return (
    <div className="container">
      <MapContainer followUp={true} map={neck} />
    </div>
  );
}
