import { DEAL } from '../constants/fields';

export const performSettingsInfoData = (raw) => ({
  tradeBudget: raw[DEAL.TRADE_BUDGET],
});

export const convertUpdateTradeBudgetData = ({ tradeBudget }) => ({
  [DEAL.TRADE_BUDGET]: Number(tradeBudget),
});
