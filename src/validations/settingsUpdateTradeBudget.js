import { minNumber, maxNumber, validator, number } from './index';
import { DEAL } from '../constants/fields';

const config = {
  [DEAL.TRADE_BUDGET]: [number, minNumber(10), maxNumber(100000)],
};

export const validate = (values) => validator(values, config);
