import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Loader, Text } from '../../components';
import { ListTitle } from '../../components/titles';
import { SkeletonDataList } from '../../components/skeletons';
import { TextField } from '../../components/fields';
import { spacing } from '../../theme';
import { ButtonPrimary } from '../../components/buttons';

export const CourseTokenSwapView = ({
  loading,
  loaded,
  updating,
  firstTokenValue,
  secondTokenValue,
  setFirstTokenValue,
  setSecondTokenValue,
  firstToken,
  secondToken,
}) => (
  <React.Fragment>
    <Box variant="outlined">
      <IndentLayout>
        <ListTitle divider={false} tid="COURSE.TOKEN_INFO.TITLE" offset={5} />
        {(loading || updating) && <Loader />}
        {loading && <SkeletonDataList />}
        {loaded && (
          <Container>
            <TextField
              type="number"
              value={firstTokenValue}
              onChange={(e) => setFirstTokenValue(e.target.value)}
              label={<Text tid="COURSE.TOKEN_INFO.TOKEN" values={{ token: firstToken }} />}
              placeholder="0.0"
            />
            <TextField
              type="number"
              value={secondTokenValue}
              onChange={(e) => setSecondTokenValue(e.target.value)}
              label={<Text tid="COURSE.TOKEN_INFO.TOKEN" values={{ token: secondToken }} />}
              placeholder="0.0"
            />
            <ButtonPrimary type="submit" color="primary" variant="outlined">
              <Text tid="COURSE.TOKEN_INFO.SUBMIT" />
            </ButtonPrimary>
          </Container>
        )}
      </IndentLayout>
    </Box>
  </React.Fragment>
);

CourseTokenSwapView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  updating: PropTypes.bool,
  firstTokenValue: PropTypes.string,
  secondTokenValue: PropTypes.string,
  setFirstTokenValue: PropTypes.func,
  setSecondTokenValue: PropTypes.func,
  firstToken: PropTypes.string,
  secondToken: PropTypes.string,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 30%;
  grid-row-gap: ${spacing(5)};
  align-items: flex-start;
`;
