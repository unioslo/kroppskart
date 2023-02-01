import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('<html><body>Live</body></html>');
};

export default handler;
