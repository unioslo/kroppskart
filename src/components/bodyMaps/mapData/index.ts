import * as wholeBody from './wholeBody';
import * as head from './headMap';

const bodyMaps = {
  wholeBody: wholeBody.default,
  headJawMouth: head.default,
};

export { wholeBody, head, bodyMaps };

export default bodyMaps;
