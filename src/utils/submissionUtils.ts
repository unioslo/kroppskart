import { BodyMapState } from '../store/bodyMapReducer';
import {
  codebook,
  getCodebookKeyForMap,
  getCodebookKeyForRegion,
  mapNamesForSex,
} from './codebook';
import { redundantBodyMapKeys, routingMap } from './constants';

const appendSubmapToFormData = (
  map: Record<string, boolean>,
  mapName: string,
  mapSelected: boolean,
  sex: string,
  answers: Record<string, string>
) => {
  let codebookMapName = mapName;
  if (mapName === 'genitals' || mapName === 'chest') {
    codebookMapName = mapNamesForSex[mapName][sex];
  }
  const redundantKeys = redundantBodyMapKeys[mapName];
  Object.entries(map).forEach(([key, value]) => {
    const codebookKey = getCodebookKeyForRegion(mapName, codebookMapName, key);
    if (mapSelected && value && !redundantKeys?.includes(key)) {
      answers[codebookKey] = '1';
    } else if ((!mapSelected || !value) && !redundantKeys?.includes(key)) {
      answers[codebookKey] = '0';
    }
  });
};

const appendMissingSubmapToFormData = (
  mapName: string,
  sex: string,
  answers: Record<string, string>
) => {
  let codebookMapName = mapName;
  if (mapName === 'genitals' || mapName === 'chest') {
    codebookMapName = mapNamesForSex[mapName][sex];
  }
  Object.entries(codebook[codebookMapName].areas).forEach(([key]) => {
    const codebookKey = getCodebookKeyForRegion(mapName, codebookMapName, key);
    answers[codebookKey] = '0';
  });
};

export const submissionFromAnswerState = (
  body: BodyMapState,
  sex: string,
  submissionId?: string
) => {
  const answers: Record<string, string> = {};
  answers['SUBMISSION_REFERENCE'] = submissionId ?? '';
  answers['HBMP_BROWSER'] =
    typeof window !== 'undefined' ? window?.navigator?.userAgent : 'unknown';
  const date = new Date().toISOString();
  answers['HBMP_DATE'] = date;
  answers['HBMP_VERSION'] = 'Kroppskart 2 Next.js';

  const redundantKeys = redundantBodyMapKeys.wholeBody;

  const wholeBody = body.wholeBody;
  Object.entries(wholeBody).forEach(([key, value]) => {
    if (!redundantKeys.includes(key)) {
      const mapName = routingMap[key];
      const codebookKey = getCodebookKeyForMap(key);
      answers[codebookKey] = value ? '1' : '0';
      const submap = body[mapName];
      if (value && submap) {
        appendSubmapToFormData(submap, mapName, value, sex, answers);
      } else {
        appendMissingSubmapToFormData(mapName, sex, answers);
      }
    }
  });

  return answers;
};
