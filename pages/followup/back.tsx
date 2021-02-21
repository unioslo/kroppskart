import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { back } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';

export default function Back() {
  const formId = useParamSelector('back');
  return (
    <div className="container">
      <MapContainer followUp={true} map={back} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
