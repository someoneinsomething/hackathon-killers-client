import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ETH_PRICE_QUERY, TOKEN_QUERY } from '../../gql/token';

import { List, ListItem as ListItemComponent, ListItemText } from '../../components/lists';
import { ListActionTitle } from '../../components/titles';
import { Box } from '../../components/cards';
import { SkeletonDataList } from '../../components/skeletons';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  }),
  cache: new InMemoryCache(),
 });

const getData = async () => {
  const { data: ethPriceData } = await client.query({ query: ETH_PRICE_QUERY });

  const { data: tokenListData } = await client.query({
    query: TOKEN_QUERY,
  });

  const ethPriceInUSD = ethPriceData && ethPriceData.bundle.ethPrice;

  tokenListData.tokens = tokenListData.tokens.map(({ derivedETH, totalLiquidity, ...other }) => {
    return {
      price: (parseFloat(derivedETH) * parseFloat(ethPriceInUSD)).toFixed(2),
      liquidity: parseFloat(totalLiquidity).toFixed(0),
      ...other,
    };
  });

  tokenListData.tokens = tokenListData.tokens.filter(({ price }) => price > 0);

  return tokenListData;
};

const CourseList = ({ tokens }) => (
  <List>
    {tokens.map(({ price, name }) => (
      <ListItemComponent>
        <ListItemText
          primary={
            <div>{name}</div>
            }
          secondary={
            <div>
              <div>Price: {price}$</div>
            </div>
            }
        />
      </ListItemComponent>
      ))}
  </List>
);

export const CourseTokenInfo = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState(null);

  useEffect(async () => {
    dispatch(headerNavigatePath(ROUTES.COURSE));

    getData().then((d) => setData(d));
  }, []);

  return (
    <Box variant="outlined">
      <ListActionTitle
        tid="Курс токенов"
      />
      {data ? <CourseList {...data} /> : <SkeletonDataList /> }
    </Box>
  );
};
