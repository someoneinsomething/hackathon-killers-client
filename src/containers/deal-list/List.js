import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import CollapseComponent from '@material-ui/core/Collapse';

import { Box } from '../../components/cards';
import { List, ListItem as ListItemComponent, ListItemText } from '../../components/lists';
import { PaginationHandler } from '../index';
import { colors, sizes, spacing } from '../../theme';
import { IndentLayout } from '../../components/layouts';

export const DealList = ({ list, pagination, paginationAction, updating, data: { amount, commission } }) => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (id) => {
    if (id === open) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <React.Fragment>
      <List divider>
        {list.map(
          ({
            id,
            createDate,
            ethUsdtCourse,
            tokenUsdtCourse,
            token,
            weth,
            pool,
            profitBid,
            tokenUsdtCourseDepthBid,
            newValueBid,
            calculatedAmountBid,
            binanceBid,
            profitAsk,
            tokenUsdtCourseDepthAsk,
            newValueAsk,
            calculatedAmountAsk,
            binanceAsk,
            amountEth,
            amountToken,
          }) => {
            const isAskProfit = profitAsk > 0;
            const isBidProfit = profitBid > 0;

            return (
              <ListItem key={id} indent={false}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <HeadingContainer button onClick={() => handleOpen(id)}>
                        <Title>
                          Дата: {createDate}. Бюджет: {amount}$.
                        </Title>
                        <Heading>
                          Купить на Uniswap, продать на Binance:
                          <Profit success={isBidProfit}>&nbsp;{profitBid}$</Profit>
                        </Heading>
                        <Heading>
                          Купить на Binance, продать на Uniswap:
                          <Profit success={isAskProfit}>&nbsp;{profitAsk}$</Profit>
                        </Heading>
                      </HeadingContainer>
                      <Collapse in={open === id} timeout="auto" unmountOnExit>
                        <Block big>
                          <Box variant="outlined">
                            <IndentLayout sizeWidth="small">
                              <Block>
                                <Heading>Общие данные</Heading>
                              </Block>
                              <Block>
                                <Paragraph>Курс ETH/USDT: {ethUsdtCourse}</Paragraph>
                                <Paragraph>Курс YFI/USDT: {tokenUsdtCourse}</Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>YFI в пуле: {token}</Paragraph>
                                <Paragraph>WETH в пуле: {weth}</Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Пул: {token} * {weth} = {pool}
                                </Paragraph>
                              </Block>
                            </IndentLayout>
                          </Box>
                        </Block>

                        <Block big>
                          <Box variant="outlined">
                            <IndentLayout sizeWidth="small">
                              <Block>
                                <Heading>
                                  <Profit success={isBidProfit}>
                                    Купить YFI на uniswap, продать на binance. Профит: {profitBid}$
                                  </Profit>
                                </Heading>
                                <Paragraph>
                                  Курс YFI/USDT (с учетом глубины стакана): {tokenUsdtCourseDepthBid}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Количество купленного ETH за бюджет: {amount} / {ethUsdtCourse} * &nbsp;
                                  {commission} = {amountEth}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Сколько будет в пуле YFI при обмене купленного ETH: {pool} / ({weth} +
                                  {amountEth} * 0.997) = {newValueBid}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Сколько получим YFI: {token} - {newValueBid} = {calculatedAmountBid}
                                </Paragraph>
                                <Paragraph>
                                  Финальная цена YFI в долларах при обмене: {calculatedAmountBid} * {''}
                                  {tokenUsdtCourseDepthBid} * 0.998 = {binanceBid}
                                </Paragraph>
                              </Block>
                            </IndentLayout>
                          </Box>
                        </Block>
                        <Block big>
                          <Box variant="outlined">
                            <IndentLayout sizeWidth="small">
                              <Block>
                                <Heading>
                                  <Profit success={isAskProfit}>
                                    Купить YFI на binance, продать на uniswap. Профит: {profitAsk}$
                                  </Profit>
                                </Heading>
                                <Paragraph>
                                  Курс YFI/USDT (с учетом глубины стакана): {tokenUsdtCourseDepthAsk}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Количество купленного YFI за бюджет: {amount} / {tokenUsdtCourseDepthAsk} *
                                  {commission} = {amountToken}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Сколько будет в пуле ETH при обмене купленного YFI: {pool} / ({token} + $
                                  {amountToken} * 0.997) = {newValueAsk}
                                </Paragraph>
                              </Block>
                              <Block>
                                <Paragraph>
                                  Сколько получим ETH: {weth} - {newValueAsk} = {calculatedAmountAsk}
                                </Paragraph>
                                <Paragraph>
                                  Финальная цена ETH в долларах при обмене: {calculatedAmountAsk} * {''}
                                  {ethUsdtCourse} * 0.998 = {binanceAsk}
                                </Paragraph>
                              </Block>
                            </IndentLayout>
                          </Box>
                        </Block>
                      </Collapse>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          },
        )}
      </List>
      <PaginationHandler
        indent
        loading={updating}
        action={paginationAction}
        currentPage={pagination.currentPage}
        amountPages={pagination.amountPages}
      />
    </React.Fragment>
  );
};

DealList.propTypes = {
  list: PropTypes.array.isRequired,
  updating: PropTypes.bool,
  pagination: PropTypes.object.isRequired,
  paginationAction: PropTypes.func.isRequired,
  data: PropTypes.shape({
    amount: PropTypes.number,
    commission: PropTypes.number,
  }),
};

const HeadingContainer = styled(ListItemComponent)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Block = styled.div`
  margin-bottom: ${({ big }) => spacing(big ? 4 : 2)};

  &:first-of-type {
    ${({ big }) =>
      big &&
      css`
        margin-top: ${spacing(3)};
      `}
  }
`;
const Title = styled.h2`
  font-size: ${sizes.font.title};
`;
const Heading = styled.h3`
  font-size: ${sizes.font.heading};
  font-weight: 600;
`;
const Paragraph = styled.p`
  font-size: ${sizes.font.default};
`;
const Profit = styled.span`
  font-size: inherit;
  font-weight: 700;
  color: ${({ success }) => (success ? colors.green : colors.error)};
`;
const ListItem = styled(ListItemComponent)`
  && {
    padding: 0;
  }
`;

const Collapse = styled(CollapseComponent)`
  padding: 0 ${spacing(6)};
`;
