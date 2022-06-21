import { NextFunction, Response, Request } from 'express';

import ExpressRequest from '../types/ExpressRequest';

export default function logErrorExpress(
  err: Error,
  request: Request,
  _: Response,
  next: NextFunction,
) {
  const modifiedRequest = request as ExpressRequest;

  modifiedRequest.httpLogger.responseTimestamp = new Date();
  modifiedRequest.httpLogger.error = err;

  next(err);
}
