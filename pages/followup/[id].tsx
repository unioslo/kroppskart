import MapContainer from '../../src/components/MapContainer';
import { rootState } from '../../src/store/store';
import mapData from '../../src/components/MapContainer/mapData';
import { useSelector } from 'react-redux';
import { GetStaticPaths } from 'next';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useGetBodyMap } from '../../src/store/selectors';
import { lowerBackKeys, surveyParams } from '../../src/utils/constants';
import { someAnswersInList } from '../../src/utils/mapUtils';
import { getUrlParam } from '../../src/utils/routingUtils';
import useGetMap from '../../src/utils/useGetMap';

export default function FollowupPage({ mapName }) {
  const sex = useSelector((state: rootState) => state.app.sex);
  const params = useSelector((state: rootState) => state.app.urlParameters);
  const map = useGetMap(mapName, sex);
  const selectedAreas = useGetBodyMap(mapName);
  let paramName = surveyParams[mapName];
  if (
    mapName === 'back' &&
    params[surveyParams.lowerBack] &&
    someAnswersInList(selectedAreas, lowerBackKeys)
  ) {
    paramName = surveyParams.lowerBack;
  }
  const formId = getUrlParam(params[paramName]);
  return (
    <div className="container">
      {map && <MapContainer followUp={true} map={map[sex] ?? map} />}
      <EmbeddedForm formId={formId} pageName={mapName} />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  return {
    props: {
      mapName: id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(mapData).reduce((acc, key) => {
      acc.push({ params: { id: key } });
      return acc;
    }, []),
    fallback: false,
  };
};
