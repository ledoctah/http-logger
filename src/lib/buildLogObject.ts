import HttpLoggerData from '../core/types/HttpLoggerData';

export default function buildLogObject(
  type: 'request' | 'response',
  httpLoggerData: HttpLoggerData,
) {
  const startTime = httpLoggerData.requestTimestamp.getTime();
  const endTime = (httpLoggerData.responseTimestamp || new Date()).getTime();

  const elapsedTime =
    type === 'response' ? `${endTime - startTime}ms` : undefined;

  return {
    id: httpLoggerData.requestLogId,
    logType: type,
    url: httpLoggerData.url,
    method: httpLoggerData.method,
    statusCode: httpLoggerData.statusCode,
    requestTimestamp: httpLoggerData.requestTimestamp,
    responseTimestamp: httpLoggerData.responseTimestamp,
    elapsedTime,
    request: httpLoggerData.request,
    response: httpLoggerData.response,
    error: httpLoggerData.error,
  };
}
