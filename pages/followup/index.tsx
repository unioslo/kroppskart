import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { wholeBody } from '../../src/components/bodyMaps/mapData';
import { FollowUpIntro } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

const Survey = () => {
  return (
    <div className="container flex">
      <MapContainer followUp={true} map={wholeBody} />
      <FollowUpIntro />
      <Navigator section="followup" />
    </div>
  );
};

export default Survey;
