import { randomUUID } from 'crypto';

import HttpLoggerData from '../core/types/HttpLoggerData';
import ExpressRequest from '../core/types/ExpressRequest';

export default function applyRequestModifications(request: ExpressRequest) {
  request.httpLogger = {} as HttpLoggerData;

  const requestLogId = randomUUID();
  const requestTimestamp = new Date();

  request.httpLogger.requestLogId = requestLogId;
  request.httpLogger.requestTimestamp = requestTimestamp;
  request.httpLogger.url = request.url;
  request.httpLogger.method = request.method;

  request.httpLogger.request = {
    query: request.query,
    params: request.params,
    headers: request.headers,
    body: request.body,
  };
}
