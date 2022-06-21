import HttpLoggerData from '../core/types/HttpLoggerData';

export default function buildLogObject(httpLoggerData: HttpLoggerData) {
  const startTime = httpLoggerData.requestTimestamp.getTime();
  const endTime = (httpLoggerData.responseTimestamp || new Date()).getTime();

  const elapsedTime = endTime - startTime;

  return {
    url: httpLoggerData.url,
    method: httpLoggerData.method,
    statusCode: httpLoggerData.statusCode,
    logRequestId: httpLoggerData.requestLogId,
    requestTimestamp: httpLoggerData.requestTimestamp,
    responseTimestamp: httpLoggerData.responseTimestamp,
    elapsedTime,
    request: httpLoggerData.request,
    response: httpLoggerData.response,
    error: httpLoggerData.error,
  };
}
