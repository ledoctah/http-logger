type HttpLoggerConfigData = {
  logsLocation?: string;
  hideTerminalLogs?: boolean;
  excludeURLs?: RegExp;
  onlyLogResponses?: boolean;
  maxResponseDataLength?: number;
  // eslint-disable-next-line no-unused-vars
  modifyBody?: (body?: any) => object;
  // eslint-disable-next-line no-unused-vars
  modifyHeaders?: (headers?: any) => void;
};

export default HttpLoggerConfigData;
