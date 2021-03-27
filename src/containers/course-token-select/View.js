import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SelectField } from '../../components/fields';
import { Text } from '../../components';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const CourseTokenSelectView = ({ tokens, value, changeValue }) => (
  <Box variant="outlined">
    <IndentLayout>
      <Select
        size="small"
        defaultValue={value}
        value={value}
        items={tokens}
        onChange={changeValue}
        label={<Text tid="COURSE.TOKEN_SELECT.SELECT_LABEL" />}
        placeholder={<Text tid="COURSE.TOKEN_SELECT.SELECT_PLACEHOLDER" />}
      />
    </IndentLayout>
  </Box>
);

CourseTokenSelectView.propTypes = {
  tokens: PropTypes.array,
  value: PropTypes.string,
  changeValue: PropTypes.string,
};

const Select = styled(SelectField)`
  && {
    min-width: 200px;
    width: 200px;
    max-width: 250px;
  }
`;
