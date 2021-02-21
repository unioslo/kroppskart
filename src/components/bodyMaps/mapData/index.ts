import * as wholeBody from './wholeBody';
import * as head from './headMap';
import * as back from './backMap';

const bodyMaps = {
  wholeBody: wholeBody.default,
  headJawMouth: head.default,
  backMap: back.default,
};

export { wholeBody, head, bodyMaps, back };

export default bodyMaps;
