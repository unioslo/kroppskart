import MapContainer from '../../src/components/bodyMaps/MapContainer';
import leftArmMap from '../../src/components/bodyMaps/mapData/leftArmMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function LeftArm() {
  const formId = usePossiblyGenderedParamSelector(
    surveyParams.leftArm
  ) as string;
  return (
    <main className="container">
      <MapContainer followUp={true} map={leftArmMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
