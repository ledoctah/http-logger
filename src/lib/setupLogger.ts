import HttpLoggerConfig from '../config/HttpLoggerConfig';
import HttpLoggerConfigData from '../core/types/HttpLoggerConfigData';

export default function setupLogger(config: HttpLoggerConfigData) {
  HttpLoggerConfig.initialize(config);
}
