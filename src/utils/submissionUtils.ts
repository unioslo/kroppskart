import { BodyMapState } from '../store/bodyMapReducer';
import {
  codebook,
  getCodebookKeyForMap,
  getCodebookKeyForRegion,
  mapNamesForSex,
} from './codebook';
import { redundantBodyMapKeys, routingMap } from './constants';

const generalAnswer = (id: string, type: 'textAnswer' | 'answerOption') =>
  `answersAsMap[${id}].${type}`;

//const optionAnswer = (id: string) => generalAnswer(id, 'answerOption');

const textAnswer = (id: string) => generalAnswer(id, 'textAnswer');

const appendSubmapToFormData = (
  map: Record<string, boolean>,
  mapName: string,
  mapSelected: boolean,
  sex: string,
  formData: FormData
) => {
  let codebookMapName = mapName;
  if (mapName === 'genitals' || mapName === 'chest') {
    codebookMapName = mapNamesForSex[mapName][sex];
  }
  const redundantKeys = redundantBodyMapKeys[mapName];
  Object.entries(map).forEach(([key, value]) => {
    if (mapSelected && value && !redundantKeys?.includes(key)) {
      formData.append(
        textAnswer(getCodebookKeyForRegion(mapName, codebookMapName, key)),
        '1'
      );
    } else if ((!mapSelected || !value) && !redundantKeys?.includes(key)) {
      formData.append(
        textAnswer(getCodebookKeyForRegion(mapName, codebookMapName, key)),
        '0'
      );
    }
  });
};

const appendMissingSubmapToFormData = (
  mapName: string,
  sex: string,
  formData: FormData
) => {
  let codebookMapName = mapName;
  if (mapName === 'genitals' || mapName === 'chest') {
    codebookMapName = mapNamesForSex[mapName][sex];
  }
  Object.entries(codebook[codebookMapName].areas).forEach(([key]) => {
    formData.append(
      textAnswer(getCodebookKeyForRegion(mapName, codebookMapName, key)),
      '0'
    );
  });
};

export const submissionFromAnswerState = (
  body: BodyMapState,
  sex: string,
  submissionId?: string
) => {
  const formData = new FormData();
  formData.append(textAnswer('SUBMISSION_REFERENCE'), submissionId ?? '');
  const userAgent =
    typeof window !== 'undefined' ? window?.navigator?.userAgent : 'unknown';
  formData.append(textAnswer('HBMP_BROWSER'), userAgent);
  const date = new Date().toISOString();
  formData.append(textAnswer('HBMP_DATE'), date);
  formData.append(textAnswer('HBMP_VERSION'), 'Kroppskart 2 Next.js');

  const redundantKeys = redundantBodyMapKeys.wholeBody;

  const wholeBody = body.wholeBody;
  Object.entries(wholeBody).forEach(([key, value]) => {
    if (!redundantKeys.includes(key)) {
      const mapName = routingMap[key];
      formData.append(textAnswer(getCodebookKeyForMap(key)), value ? '1' : '0');
      const submap = body[mapName];
      if (value && submap) {
        appendSubmapToFormData(submap, mapName, value, sex, formData);
      } else {
        appendMissingSubmapToFormData(mapName, sex, formData);
      }
    }
  });

  return formData;
};

export const postSubmission = (
  formId: string,
  body: FormData,
  submissionId?: string
) => {
  const referenceId = submissionId ? `&referenceId=${submissionId}` : '';
  return fetch(
    `https://nettskjema.no/answer/deliver.json?formId=${formId}${referenceId}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body,
    }
  );
};
