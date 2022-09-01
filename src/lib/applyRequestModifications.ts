import { randomUUID } from 'crypto';

import HttpLoggerData from '../core/types/HttpLoggerData';
import ExpressRequest from '../core/types/ExpressRequest';
import HttpLoggerConfig from '../config/HttpLoggerConfig';

export default function applyRequestModifications(request: ExpressRequest) {
  request.httpLogger = {} as HttpLoggerData;

  const requestLogId = randomUUID();
  const requestTimestamp = new Date();

  request.httpLogger.requestLogId = requestLogId;
  request.httpLogger.requestTimestamp = requestTimestamp;
  request.httpLogger.url = request.url;
  request.httpLogger.method = request.method;

  const newBody = request.body ? { ...request.body } : request.body;
  const newHeaders = request.headers ? { ...request.headers } : request.headers;

  request.httpLogger.request = {
    query: request.query,
    params: request.params,
    headers: HttpLoggerConfig.modifyHeaders(newHeaders),
    body: HttpLoggerConfig.modifyBody(newBody),
  };
}
