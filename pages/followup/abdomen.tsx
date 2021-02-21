import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { abdomen } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';

export default function Abdomen() {
  const formId = useParamSelector('abdom');
  return (
    <div className="container">
      <MapContainer followUp={true} map={abdomen} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
