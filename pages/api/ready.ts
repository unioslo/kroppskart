import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('<html><body>Ready</body></html>');
};

export default handler;
