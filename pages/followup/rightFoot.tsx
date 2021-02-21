import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightFoot } from '../../src/components/bodyMaps/mapData';

export default function RightFoot() {
  return (
    <div className="container">
      <MapContainer followUp={true} map={rightFoot} />
    </div>
  );
}
