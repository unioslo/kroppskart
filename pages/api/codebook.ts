import { NextApiRequest, NextApiResponse } from 'next';
import { getUrlParam } from '../../src/utils/routingUtils';

const getCodebookFromForm = (form: any) => {
  const elements = form.pages[0].elements;
  const codebookMap = {};
  for (const element of elements) {
    const question = element.questions[0];
    codebookMap[question.externalQuestionId] = question.questionId;
  }
  return codebookMap;
};

const fetchForm = (formId: string) =>
  fetch(`https://nettskjema.no/answer/answer.json?formId=${formId}`)
    .then((r) => r.json())
    .then((j) => j.form);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const formId = getUrlParam(req.query.formId);
  let form;
  let codebook;
  try {
    if (formId) {
      form = await fetchForm(formId);
    }
  } catch (e) {
    console.warn(e);
    res.status(500).end();
    return;
  }
  if (form) {
    codebook = getCodebookFromForm(form);
  }
  if (codebook) {
    res.status(200).json({ codebook });
  } else {
    console.warn('codebook not generated');
    res.status(500).end();
  }
};

export default handler;
