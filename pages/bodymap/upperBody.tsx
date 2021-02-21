import { useDispatch, useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import bodyMaps from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import { setSex } from '../../src/store/appStateReducer';
import { rootState } from '../../src/store/store';

export default function UpperBody() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={bodyMaps.upperBody[sex]} />
      <button
        onClick={() => dispatch(setSex(sex === 'female' ? 'male' : 'female'))}
      >
        Toggle sex
      </button>
    </div>
  );
}
