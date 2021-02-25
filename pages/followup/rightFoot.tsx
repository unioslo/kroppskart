import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightFoot } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function RightFoot() {
  const formId = useParamSelector(surveyParams.rightFoot);
  return (
    <main className="container">
      <MapContainer followUp={true} map={rightFoot} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
