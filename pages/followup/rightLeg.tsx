import MapContainer from '../../src/components/MapContainer';
import rightLegMap from '../../src/components/MapContainer/mapData/rightLegMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function RightLeg() {
  const formId = useParamSelector(surveyParams.rightLeg);
  return (
    <main className="container">
      <MapContainer followUp={true} map={rightLegMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
