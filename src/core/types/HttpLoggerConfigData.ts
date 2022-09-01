type HttpLoggerConfigData = {
  logsLocation?: string;
  hideTerminalLogs?: boolean;
  excludeURLs?: string[];
  onlyLogResponses?: boolean;
};

export default HttpLoggerConfigData;
