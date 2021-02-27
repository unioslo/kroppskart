import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import genitalsFemaleMap from '../../src/components/bodyMaps/mapData/genitalsFemaleMap';
import genitalsMaleMap from '../../src/components/bodyMaps/mapData/genitalsMaleMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import { rootState } from '../../src/store/store';

export default function Genitals() {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer
        map={sex === 'female' ? genitalsFemaleMap : genitalsMaleMap}
      />
      <Navigator />
    </main>
  );
}
