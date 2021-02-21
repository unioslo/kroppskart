import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { back } from '../../src/components/bodyMaps/mapData';

export default function Back() {
  return (
    <div className="container">
      <MapContainer followUp={true} map={back} />
    </div>
  );
}
