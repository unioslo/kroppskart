import { useSelector } from 'react-redux';
import { rootState } from '../../store/store';
import MapContainer from '../MapContainer/MapContainer';
import { MapType } from '../MapContainer/mapData/mapType';
import { MessageBoxBodyMap } from '../messageBoxes';
import Navigator from '../Navigator';

type Props = {
  mapName: string;
  map: MapType;
};

export const BodyMapPage = ({ map, mapName }: Props) => {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <div className="container">
      <MessageBoxBodyMap />
      {map && <MapContainer map={map[sex] ?? map} />}
      <Navigator mapName={mapName} />
    </div>
  );
};

export default BodyMapPage;
