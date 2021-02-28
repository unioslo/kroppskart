import MapContainer from '../../src/components/MapContainer';
import leftLegMap from '../../src/components/MapContainer/mapData/leftLegMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function LeftLeg() {
  const formId = useParamSelector(surveyParams.leftLeg);
  return (
    <main className="container">
      <MapContainer followUp={true} map={leftLegMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
