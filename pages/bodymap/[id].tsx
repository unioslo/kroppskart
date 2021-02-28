import MapContainer from '../../src/components/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';
import { rootState, wrapper } from '../../src/store/store';
import mapData from '../../src/components/MapContainer/mapData';
import { useSelector } from 'react-redux';
import { GetStaticPaths } from 'next';

export default function BodyMapPage({ map, mapName }) {
  const sex = useSelector((state: rootState) => state.app.sex);

  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={map[sex] ?? map} />
      <Navigator mapName={mapName} />
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
