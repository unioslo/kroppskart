import React from 'react';
import Image from 'next/image';

import style from './bodyMap.module.scss';
import { MapType } from './mapData/mapType';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../store/store';
import { selectAllAreas, unselectAllAreas } from '../../store/bodyMapReducer';

const MapContainer = ({ map }: { map: MapType }) => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const dispatch = useDispatch();
  const { width, height, image, parts } = map;
  return (
    <div className={style.bodyMapContainer}>
      <SVGContainer width={width} height={height}>
        {Object.entries(parts).map(([key, value]) => (
          <ClickablePolygon
            key={key}
            id={key}
            linkedWith={value?.linkedWith}
            bodyMap={map.name}
            points={value.points}
            alt={value.alt}
          />
        ))}
      </SVGContainer>
      <Image
        src={typeof image === 'string' ? image : image[sex]}
        width={width}
        height={height}
        id={map.name}
      />
      <button onClick={() => dispatch(selectAllAreas(map.name))}>
        Velg alle
      </button>
      <button onClick={() => dispatch(unselectAllAreas(map.name))}>
        Fjern alle
      </button>
    </div>
  );
};

export default MapContainer;
