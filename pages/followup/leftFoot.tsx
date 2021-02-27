import MapContainer from '../../src/components/MapContainer';
import leftFootMap from '../../src/components/MapContainer/mapData/leftFootMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function LeftFoot() {
  const formId = useParamSelector(surveyParams.leftFoot);
  return (
    <main className="container">
      <MapContainer followUp={true} map={leftFootMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
