export type MapParts = {
  [key: string]: {
    points: string;
    alt: string;
    linkedWith?: string | string[];
    shape?: string;
    name?: string;
  };
};

type BaseMap = {
  parts: MapParts;
  image:
    | ((p: any) => JSX.Element)
    | { male: (p: any) => JSX.Element; female: (p: any) => JSX.Element };
  width: number;
  height: number;
  name: string;
  keys: string[];
  responsive?: Omit<MapType, 'responsive'>;
};

export type MapType = BaseMap | { male: BaseMap; female: BaseMap };
