import MapContainer from '../../src/components/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import { rootState } from '../../src/store/store';
import mapData from '../../src/components/MapContainer/mapData';
import { useSelector } from 'react-redux';
import { GetStaticPaths } from 'next';
import useGetMap from '../../src/utils/useGetMap';

export default function BodyMapPage({ mapName }) {
  const sex = useSelector((state: rootState) => state.app.sex);

  const map = useGetMap(mapName, sex);

  return (
    <div className="container">
      <MessageBoxBodyMap />
      {map && <MapContainer map={map[sex] ?? map} />}
      <Navigator mapName={mapName} />
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
