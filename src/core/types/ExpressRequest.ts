import { Request } from 'express';

import HttpLoggerData from './HttpLoggerData';

interface ExpressRequest extends Request {
  httpLogger: HttpLoggerData;
}

export default ExpressRequest;
