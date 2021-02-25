import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { back } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Back() {
  const formId = useParamSelector(surveyParams.back);
  return (
    <main className="container">
      <MapContainer followUp={true} map={back} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
