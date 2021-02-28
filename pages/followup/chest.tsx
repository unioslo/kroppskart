import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/MapContainer';
import chestFemaleMap from '../../src/components/MapContainer/mapData/chestFemaleMap';
import chestMaleMap from '../../src/components/MapContainer/mapData/chestMaleMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { rootState } from '../../src/store/store';
import { surveyParams } from '../../src/utils/constants';

export default function chest() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector(surveyParams.chest);
  return (
    <main className="container">
      <MapContainer
        followUp={true}
        map={sex === 'female' ? chestFemaleMap : chestMaleMap}
      />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
