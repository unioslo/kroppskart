export type MapParts = {
  [key: string]: {
    points: string;
    alt: string;
    linkedWith?: string | string[];
    shape?: string;
    name?: string;
  };
};

export type MapType = {
  parts: MapParts;
  image: string | { male: string; female: string };
  width: number;
  height: number;
  name: string;
  keys: string[];
  responsive?: Omit<MapType, 'responsive'>;
};
