type HttpLoggerConfigData = {
  logsLocation?: string;
  hideTerminalLogs?: boolean;
  excludeURLs?: RegExp;
  onlyLogResponses?: boolean;
  maxResponseDataLength?: number;
};

export default HttpLoggerConfigData;
