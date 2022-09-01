import HttpLoggerConfig from '../config/HttpLoggerConfig';
import HttpLoggerData from '../core/types/HttpLoggerData';

export default function buildLogObject(
  type: 'request' | 'response',
  httpLoggerData: HttpLoggerData,
) {
  const startTime = httpLoggerData.requestTimestamp.getTime();
  const endTime = (httpLoggerData.responseTimestamp || new Date()).getTime();

  const elapsedTime =
    type === 'response' ? `${endTime - startTime}ms` : undefined;

  let responseData: object | string | undefined =
    httpLoggerData.response?.responseData;

  if (responseData && HttpLoggerConfig.truncateResponseData) {
    responseData = JSON.stringify(
      httpLoggerData.response?.responseData,
    ).substring(0, HttpLoggerConfig.maxResponseDataLength);
  }

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
    response: responseData,
    error: httpLoggerData.error,
  };
}
