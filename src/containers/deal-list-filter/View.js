import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Checkbox } from '../../components/fields';
import { Text } from '../../components';

export const DealListFilterView = ({ checkboxValue, changeCheckboxValue }) => {
  return (
    <Box variant="outlined">
      <IndentLayout>
        <Checkbox
          checked={checkboxValue}
          onChange={changeCheckboxValue}
          variant="outlined"
          label={
            <React.Fragment>
              <Text tid="DEAL.DEAL_LIST.FILTER_PROFIT" />
            </React.Fragment>
          }
        />
      </IndentLayout>
    </Box>
  );
};

DealListFilterView.propTypes = {
  checkboxValue: PropTypes.bool,
  changeCheckboxValue: PropTypes.func,
};
