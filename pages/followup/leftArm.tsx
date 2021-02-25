import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftArm } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function LeftArm() {
  const formId = usePossiblyGenderedParamSelector(
    surveyParams.leftArm
  ) as string;
  return (
    <main className="container">
      <MapContainer followUp={true} map={leftArm} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
