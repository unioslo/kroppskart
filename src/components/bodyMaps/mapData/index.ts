import * as wholeBody from './wholeBody';
import * as head from './headMap';
import * as back from './backMap';
import * as leftArm from './leftArmMap';

const bodyMaps = {
  wholeBody: wholeBody.default,
  headJawMouth: head.default,
  backMap: back.default,
  leftArm: leftArm.default,
};

export { wholeBody, head, bodyMaps, back, leftArm };

export default bodyMaps;
