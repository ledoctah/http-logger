import HttpLoggerConfigData from '../core/types/HttpLoggerConfigData';

export default class HttpLoggerConfig {
  public static logsLocation: string = './logs';

  public static hideTerminalLogs: boolean = false;

  public static initialize(config?: HttpLoggerConfigData) {
    if (!config) {
      return;
    }

    HttpLoggerConfig.logsLocation = config.logsLocation || './logs';
    HttpLoggerConfig.hideTerminalLogs = !!config.hideTerminalLogs;
  }
}
