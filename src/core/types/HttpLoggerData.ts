import HttpLoggerRequestData from './HttpLoggerRequestData';
import HttpLoggerResponseData from './HttpLoggerResponseData';

type HttpLoggerData = {
  url: string;
  method: string;
  statusCode: number;
  requestLogId: string;
  requestTimestamp: Date;
  responseTimestamp?: Date;
  error?: any;
  request: HttpLoggerRequestData;
  response?: HttpLoggerResponseData;
};

export default HttpLoggerData;
