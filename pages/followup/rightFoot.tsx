import MapContainer from '../../src/components/bodyMaps/MapContainer';
import rightFootMap from '../../src/components/bodyMaps/mapData/rightFootMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function RightFoot() {
  const formId = useParamSelector(surveyParams.rightFoot);
  return (
    <main className="container">
      <MapContainer followUp={true} map={rightFootMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
