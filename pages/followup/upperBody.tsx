import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/MapContainer';
import upperBodyFemaleMap from '../../src/components/MapContainer/mapData/upperBodyFemaleMap';
import upperBodyMaleMap from '../../src/components/MapContainer/mapData/upperBodyMaleMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { rootState } from '../../src/store/store';
import { surveyParams } from '../../src/utils/constants';

export default function UpperBody() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector(surveyParams.upperBody);
  return (
    <main className="container">
      <MapContainer
        followUp={true}
        map={sex === 'female' ? upperBodyFemaleMap : upperBodyMaleMap}
      />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
