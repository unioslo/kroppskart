import * as wholeBody from './wholeBody';
import * as head from './headMap';
import * as back from './backMap';
import * as leftArm from './leftArmMap';
import * as rightArm from './rightArmMap';
import * as neck from './neckMap';
import * as abdomen from './abdomenMap';
import * as leftFoot from './leftFootMap';
import * as rightFoot from './rightFootMap';
import * as genitalsMale from './genitalsMaleMap';
import * as genitalsFemale from './genitalsFemaleMap';
import * as upperBodyFemale from './upperBodyFemaleMap';
import * as upperBodyMale from './upperBodyMaleMap';

const bodyMaps = {
  wholeBody: wholeBody.default,
  headJawMouth: head.default,
  backMap: back.default,
  leftArm: leftArm.default,
  rightArm: rightArm.default,
  neck: neck.default,
  abdomen: abdomen.default,
  rightFoot: rightFoot.default,
  leftFoot: leftFoot.default,
  genitals: { male: genitalsMale.default, female: genitalsFemale.default },
  upperBody: { male: upperBodyMale.default, female: upperBodyFemale.default },
};

export {
  wholeBody,
  head,
  back,
  leftArm,
  rightArm,
  neck,
  abdomen,
  rightFoot,
  leftFoot,
  genitalsFemale,
  genitalsMale,
  upperBodyMale,
  upperBodyFemale,
};

export default bodyMaps;
