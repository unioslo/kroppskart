import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { genitals } from '../../src/components/bodyMaps/mapData';
import { rootState } from '../../src/store/store';

export default function Genitals() {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <div className="container">
      <MapContainer map={genitals[sex]} />
    </div>
  );
}
