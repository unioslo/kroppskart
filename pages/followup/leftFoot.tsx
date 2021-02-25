import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftFoot } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function LeftFoot() {
  const formId = useParamSelector(surveyParams.leftFoot);
  return (
    <main className="container">
      <MapContainer followUp={true} map={leftFoot} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
