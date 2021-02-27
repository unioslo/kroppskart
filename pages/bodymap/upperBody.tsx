import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import upperBodyFemaleMap from '../../src/components/bodyMaps/mapData/upperBodyFemaleMap';
import upperBodyMaleMap from '../../src/components/bodyMaps/mapData/upperBodyMaleMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import { rootState } from '../../src/store/store';

export default function UpperBody() {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer
        map={sex === 'female' ? upperBodyFemaleMap : upperBodyMaleMap}
      />
      <Navigator />
    </main>
  );
}
