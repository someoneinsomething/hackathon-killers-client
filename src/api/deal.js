import { DEAL, DEAL_ITEM } from '../constants/fields';
import { getDateTime, performWithPagination } from '.';

const performDealListListData = performWithPagination((raw) =>
  raw.map((item) => ({
    id: item[DEAL_ITEM.ID],
    createDate: getDateTime(item[DEAL_ITEM.CREATE_DATE]),
    token: item[DEAL_ITEM.TOKEN],
    weth: item[DEAL_ITEM.WETH],
    ethUsdtCourse: item[DEAL_ITEM.ETH_USDT_COURSE],
    tokenUsdtCourse: item[DEAL_ITEM.TOKEN_USDT_COURSE],
    tokenUsdtCourseDepthAsk: item[DEAL_ITEM.TOKEN_USDT_COURSE_DEPTH_ASK],
    tokenUsdtCourseDepthBid: item[DEAL_ITEM.TOKEN_USDT_COURSE_DEPTH_BID],
    pool: item[DEAL_ITEM.POOL],
    profitAsk: item[DEAL_ITEM.PROFIT_ASK],
    profitBid: item[DEAL_ITEM.PROFIT_BID],
    amountEth: item[DEAL_ITEM.AMOUNT_ETH],
    amountToken: item[DEAL_ITEM.AMOUNT_TOKEN],
    newValueAsk: item[DEAL_ITEM.NEW_VALUE_ASK],
    newValueBid: item[DEAL_ITEM.NEW_VALUE_BID],
    calculatedAmountAsk: item[DEAL_ITEM.CALCULATED_AMOUNT_ASK],
    calculatedAmountBid: item[DEAL_ITEM.CALCULATED_AMOUNT_BID],
    binanceAsk: item[DEAL_ITEM.BINANCE_ASK],
    binanceBid: item[DEAL_ITEM.BINANCE_BID],
  })),
);

export const performDealListData = (raw) => ({
  data: {
    amount: Number(raw[DEAL.DATA][DEAL.TRADE_BUDGET].toFixed(2)),
    commission: raw[DEAL.DATA][DEAL.COMMISSION],
  },
  list: performDealListListData(raw[DEAL.LIST]),
});
