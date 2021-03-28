import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../index';
import { colors, sizes, spacing } from '../../theme';

export const FormTitle = ({ tid, endAdornment: EndAnornment, offset = 5 }) => (
  <Container offset={offset}>

    <Title>
      <Text tid={tid} />
    </Title>
    {EndAnornment && (
      <EndAdornmentBlock>
        <EndAnornment />
      </EndAdornmentBlock>
    )}
  </Container>
);

FormTitle.propTypes = {
  tid: PropTypes.string.isRequired,
  offset: PropTypes.number,
  endAdornment: PropTypes.node,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${({ offset }) => spacing(offset)};
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: ${spacing(3)};
  background-color: ${colors.lightPrimary};
  color: ${colors.textPrimary};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: ${sizes.font.title};
  color: ${colors.textPrimary};
`;
const EndAdornmentBlock = styled.div`
  margin-left: auto;
`;
