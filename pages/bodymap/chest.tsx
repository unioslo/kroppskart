import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/MapContainer';
import chestFemaleMap from '../../src/components/MapContainer/mapData/chestFemaleMap';
import chestMaleMap from '../../src/components/MapContainer/mapData/chestMaleMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import { rootState } from '../../src/store/store';

export default function Chest() {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={sex === 'female' ? chestFemaleMap : chestMaleMap} />
      <Navigator />
    </main>
  );
}
