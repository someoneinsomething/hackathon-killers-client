import gql from 'graphql-tag';

export const TOKEN_QUERY = gql`
  query tokens {
    tokens {
        id
        symbol
        name
        derivedETH,
        totalLiquidity
    }
  }
`;

export const ETH_PRICE_QUERY = gql`
  query ethPrice {
    bundle(id: "1") {
      ethPrice
    }
  }
`;