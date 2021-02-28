import MapContainer from '../../src/components/MapContainer';
import { rootState, wrapper } from '../../src/store/store';
import mapData from '../../src/components/MapContainer/mapData';
import { useSelector } from 'react-redux';
import { GetStaticPaths } from 'next';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function FollowupPage({ map, mapName }) {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector(surveyParams[mapName]);
  return (
    <div className="container">
      <MapContainer followUp={true} map={map[sex] ?? map} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ params }) => {
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const map = mapData[id];
  return {
    props: {
      map,
      mapName: id,
    },
  };
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(mapData).reduce((acc, key) => {
      acc.push({ params: { id: key } });
      return acc;
    }, []),
    fallback: false,
  };
};
