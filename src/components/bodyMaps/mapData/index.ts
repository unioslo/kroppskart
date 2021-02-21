import * as wholeBody from './wholeBody';
import * as head from './headMap';
import * as back from './backMap';
import * as leftArm from './leftArmMap';
import * as rightArm from './rightArmMap';
import * as neck from './neckMap';

const bodyMaps = {
  wholeBody: wholeBody.default,
  headJawMouth: head.default,
  backMap: back.default,
  leftArm: leftArm.default,
  rightArm: rightArm.default,
  neck: neck.default,
};

export { wholeBody, head, bodyMaps, back, leftArm, rightArm, neck };

export default bodyMaps;
