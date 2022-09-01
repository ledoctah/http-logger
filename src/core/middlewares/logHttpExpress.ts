import Consola from 'consola';
import { NextFunction, Response, Request } from 'express';

import HttpLoggerConfig from '../../config/HttpLoggerConfig';

import applyRequestModifications from '../../lib/applyRequestModifications';
import buildLogObject from '../../lib/buildLogObject';
import overwriteResponseFunctions from '../../lib/overwriteResponseFunctions';

import ExpressRequest from '../types/ExpressRequest';

export default function logHttpExpress(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (HttpLoggerConfig.excludeURLs.includes(request.url)) {
    return next();
  }

  const modifiedRequest = request as ExpressRequest;

  applyRequestModifications(modifiedRequest);

  overwriteResponseFunctions(response, modifiedRequest);

  if (!HttpLoggerConfig.onlyLogResponses) {
    const logObject = buildLogObject('request', modifiedRequest.httpLogger);

    Consola.info(logObject);
  }

  response.on('finish', () => {
    modifiedRequest.httpLogger.request.params = request.params;

    const logObject = buildLogObject('response', modifiedRequest.httpLogger);

    if (HttpLoggerConfig.hideTerminalLogs) {
      return;
    }

    if (logObject.error) {
      Consola.error(logObject);
      return;
    }

    Consola.info(logObject);
  });

  return next();
}
