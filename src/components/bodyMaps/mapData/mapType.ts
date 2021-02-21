export type MapParts = {
  [key: string]: {
    points: string;
    alt: string;
    linkedWith?: string;
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
};
