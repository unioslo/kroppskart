import { useSelector } from 'react-redux';
import { rootState } from '../../store/store';
import { MapType } from '../MapContainer/mapData/mapType';
import { useGetBodyMap } from '../../store/selectors';
import { someAnswersInList } from '../../utils/mapUtils';
import { lowerBackKeys, surveyParams } from '../../utils/constants';
import { getUrlParam } from '../../utils/routingUtils';
import MapContainer from '../MapContainer/MapContainer';
import EmbeddedForm from '../EmbeddedForm';

type Props = {
  map: MapType;
  mapName: string;
};

export const FollowupPage = ({ map, mapName }: Props) => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const params = useSelector((state: rootState) => state.app.urlParameters);
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
};
