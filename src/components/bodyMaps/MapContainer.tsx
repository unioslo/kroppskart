import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import style from './bodyMap.module.scss';
import { MapType } from './mapData/mapType';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../store/store';
import {
  initBodyMapValues,
  selectAllAreas,
  unselectAllAreas,
} from '../../store/bodyMapReducer';
import { SelectionButtons } from '../ui';

const MapContainer = ({
  map,
  followUp,
}: {
  map: MapType;
  followUp?: boolean;
}) => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const dispatch = useDispatch();
  const { width, height, image, parts } = map;
  React.useEffect(() => {
    if (!followUp) {
      dispatch(initBodyMapValues(map.name, map.keys));
    }
  }, []);
  return (
    <>
      <div
        className={cn(
          style.bodyMapContainer,
          followUp && style.disableInteraction
        )}
        style={{ width: width, height: height }}
      >
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
        <Image
          src={typeof image === 'string' ? image : image[sex]}
          width={width}
          height={height}
          id={map.name}
          objectFit="cover"
        />
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
