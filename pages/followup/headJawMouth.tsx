import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { head } from '../../src/components/bodyMaps/mapData';

export default function HeadJawMouth() {
  return (
    <div className="container">
      <MapContainer followUp={true} map={head} />
    </div>
  );
}
