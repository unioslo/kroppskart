import React from 'react';
import cn from 'classnames';

import style from './bodyMap.module.scss';
import { BaseMap } from './mapData/mapType';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../store/store';
import {
  initBodyMapValues,
  selectAllAreas,
  unselectAllAreas,
} from '../../store/bodyMapReducer';
import { SelectionButtons } from '../ui';

const getMap = (map: BaseMap, responsive: boolean) => {
  if (!responsive) {
    return map;
  }
  return map.responsive ?? map;
};

const useDetectResponsive = () => {
  const [responsive, setResponsive] = React.useState(
    typeof document !== 'undefined' ? document.body.offsetWidth <= 700 : false
  );
  // TODO: Add this as debounced resize handler to get fully dynamic map
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (document.body.offsetWidth > 700 && responsive) {
        setResponsive(false);
      } else if (document.body.offsetWidth <= 700 && !responsive) {
        setResponsive(true);
      }
    }
  }, [responsive, setResponsive]);
  return responsive;
};

const MapContainer = ({
  map,
  followUp,
}: {
  map: BaseMap;
  followUp?: boolean;
}) => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const dispatch = useDispatch();
  const responsive = useDetectResponsive();
  const { width, height, image, parts } = getMap(map, responsive);
  React.useEffect(() => {
    if (!followUp) {
      dispatch(initBodyMapValues(map.name, map.keys));
    }
  }, [map.name, map.keys, followUp, dispatch]);
  const MapImage = Object.keys(image).includes(sex) ? image[sex] : image;
  return (
    <>
      <div
        className={cn(
          style.bodyMapContainer,
          followUp && style.disableInteraction
        )}
        style={{ width: width }}
      >
        {/* The width ABOVE can be changed increase max image size */}
        <SVGContainer width={width} height={height}>
          {Object.entries(parts).map(([key, value]) => (
            <ClickablePolygon
              key={key}
              id={key}
              linkedWith={value?.linkedWith}
              bodyMap={map.name}
              points={value.points}
              alt={value.alt}
              followUp={followUp}
            />
          ))}
        </SVGContainer>
        <image
          width={width}
          height={height}
          id={map.name}
          className={style.image}
        >
          <MapImage />
        </image>
      </div>
      {!followUp && (
        <SelectionButtons
          onSelectAll={() => dispatch(selectAllAreas(map.name))}
          onUnselectAll={() => dispatch(unselectAllAreas(map.name))}
        />
      )}
    </>
  );
};

export default MapContainer;
