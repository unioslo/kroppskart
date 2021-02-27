import MapContainer from '../../src/components/MapContainer';
import rightArmMap from '../../src/components/MapContainer/mapData/rightArmMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function RightArm() {
  const formId = usePossiblyGenderedParamSelector(
    surveyParams.rightArm
  ) as string;
  return (
    <main className="container">
      <MapContainer followUp={true} map={rightArmMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
