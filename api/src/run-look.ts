import { Request, Response, NextFunction } from 'express';
import JSON5 from 'json5';
import looker from './looker';

const runLook = async (req: Request, res: Response, next: NextFunction) => {
  // make any other calls to the Looker SDK

  if (!req.params.lookId) {
    res.status(400).json('Missing parameter lookId');
    next();

    return;
  }

  const sdk = await looker();

  const looks = await sdk.ok(sdk.search_looks({ id: req.params.lookId }));

  if (looks.length === 0) {
    return null;
  }

  const result = await sdk.ok(
    sdk.run_look({
      result_format: 'json',
      look_id: 175
    })
  );

  res.status(200).json(result);
};

export default runLook;
