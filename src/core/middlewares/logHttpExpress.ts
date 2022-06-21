import Consola from 'consola';
import { randomBytes } from 'crypto';
import { NextFunction, Response, Request } from 'express';

import buildLogObject from '../../lib/buildLogObject';

import ExpressRequest from '../types/ExpressRequest';
import HttpLoggerData from '../types/HttpLoggerData';

export default function logHttpExpress(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const modifiedRequest = request as ExpressRequest;

  modifiedRequest.httpLogger = {} as HttpLoggerData;

  const requestLogId = randomBytes(16).toString('hex');
  const requestTimestamp = new Date();

  modifiedRequest.httpLogger.requestLogId = requestLogId;
  modifiedRequest.httpLogger.requestTimestamp = requestTimestamp;
  modifiedRequest.httpLogger.url = modifiedRequest.url;
  modifiedRequest.httpLogger.method = modifiedRequest.method;

  modifiedRequest.httpLogger.request = {
    query: modifiedRequest.query,
    params: modifiedRequest.params,
    headers: modifiedRequest.headers,
    body: modifiedRequest.body,
  };

  const jsonFunction = response.json;
  const sendFunction = response.send;

  response.json = (body: any) => {
    modifiedRequest.httpLogger.responseTimestamp = new Date();
    modifiedRequest.httpLogger.statusCode = response.statusCode;
    modifiedRequest.httpLogger.response = {
      responseData: body,
    };

    return jsonFunction.call(response, body);
  };

  response.send = (body: any) => {
    modifiedRequest.httpLogger.responseTimestamp = new Date();
    modifiedRequest.httpLogger.statusCode = response.statusCode;
    modifiedRequest.httpLogger.response = {
      responseData: body,
    };

    return sendFunction.call(response, body);
  };

  response.on('finish', () => {
    modifiedRequest.httpLogger.request.params = request.params;

    const logObject = buildLogObject(modifiedRequest.httpLogger);

    if (logObject.error) {
      return Consola.error(logObject);
    }

    return Consola.info(logObject);
  });

  return next();
}
