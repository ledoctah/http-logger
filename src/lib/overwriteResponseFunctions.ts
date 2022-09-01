/* eslint-disable no-param-reassign */
import { Response } from 'express';

import ExpressRequest from '../core/types/ExpressRequest';

export default function overwriteResponseFunctions(
  response: Response,
  modifiedRequest: ExpressRequest,
) {
  const jsonFunction = response.json;
  const sendFunction = response.send;
  const renderFunction = response.render;

  response.json = (body: any) => {
    modifiedRequest.httpLogger.responseTimestamp = new Date();
    modifiedRequest.httpLogger.statusCode = response.statusCode;
    modifiedRequest.httpLogger.response = {
      responseData: body,
    };

    response.json = jsonFunction;

    return response.json(body);
  };

  response.send = (body: any) => {
    modifiedRequest.httpLogger.responseTimestamp = new Date();
    modifiedRequest.httpLogger.statusCode = response.statusCode;
    modifiedRequest.httpLogger.response = {
      responseData: body,
    };

    response.send = sendFunction;

    return response.send(body);
  };

  response.render = (
    view: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    options?: object,
    // eslint-disable-next-line no-unused-vars
    callback?: (err: Error, html: string) => void,
  ) => {
    modifiedRequest.httpLogger.responseTimestamp = new Date();
    modifiedRequest.httpLogger.statusCode = response.statusCode;
    modifiedRequest.httpLogger.response = {
      responseData: options,
    };

    response.render = renderFunction;

    return response.render(view, options, callback);
  };
}
