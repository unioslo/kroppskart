import MapContainer from '../../src/components/MapContainer';
import rightFootMap from '../../src/components/MapContainer/mapData/rightFootMap';
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
