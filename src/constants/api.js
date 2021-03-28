const API_SERVER = process.env.API;

export const API = {
  DEAL_LIST: ({ skip, take, profit }) =>
    `${API_SERVER}/trade/statistics?skip=${skip}&take=${take}&profit=${profit}`,
  SETTINGS_INFO: () => `${API_SERVER}/settings/info`,
  SETTINGS_UPDATE_TRADE_BUDGET: () => `${API_SERVER}/settings/trade-budget`,
};
