import { useRouter } from 'next/router';
import MapContainer from '../../src/components/MapContainer';
import wholeBody from '../../src/components/MapContainer/mapData/wholeBody';
import {
  FollowUpIntro,
  MessageBoxPointOfNoReturn,
  MessageBoxWholeBody,
} from '../../src/components/messageBoxes';
import Navigator, { useGetNextPage } from '../../src/components/Navigator';
import { NavigationButtons } from '../../src/components/ui';

const SurveyOrFollowup = () => {
  const mode = useRouter().query.mode;
  const { nextPage, relevantRoutes } = useGetNextPage(mode as string);

  if (mode === 'bodymap') {
    return (
      <main className="container flex">
        <MessageBoxWholeBody />
        <MapContainer map={wholeBody} />
        <Navigator />
      </main>
    );
  }
  return (
    <main className="container flex">
      <MapContainer followUp={true} map={wholeBody} />
      {relevantRoutes.length > 0 ? (
        <FollowUpIntro />
      ) : (
        <MessageBoxPointOfNoReturn />
      )}
      <NavigationButtons nextPage={nextPage} />
    </main>
  );
};

export default SurveyOrFollowup;
