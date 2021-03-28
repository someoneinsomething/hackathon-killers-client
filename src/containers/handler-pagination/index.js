import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Progress } from '../../components/Progress';
import { elementVisible, throttle } from '../../utils';
import { OBSERVE_INTERVAL } from '../../constants';
import { spacing } from '../../theme';

const PAGINATION_ID = 'PAGINATION_ID';

class PaginationHandlerContainer extends React.Component {
  paginationObserve = throttle(() => {
    const { loading, action, currentPage, amountPages, listLength, amountTake } = this.props;

    if (listLength && amountTake) {
      if (listLength <= amountTake) {
        return null;
      }
    }

    if (loading !== true && currentPage < amountPages) {
      return action();
    }

    return null;
  }, OBSERVE_INTERVAL.PAGINATION_REQUEST);

  componentDidMount() {
    window.addEventListener('scroll', this.eventListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.eventListener);
  }

  eventListener = () => {
    return elementVisible(document.getElementById(PAGINATION_ID), this.paginationObserve);
  };

  render() {
    const { currentPage, amountPages, indent } = this.props;

    if (amountPages === 1) {
      return null;
    }

    if (currentPage >= amountPages) {
      return null;
    }

    return (
      <Container indent={indent} id={PAGINATION_ID}>
        <Progress />
      </Container>
    );
  }
}

PaginationHandlerContainer.propTypes = {
  loading: PropTypes.bool,
  currentPage: PropTypes.number,
  amountPages: PropTypes.number,
  action: PropTypes.func,
  indent: PropTypes.bool,
  listLength: PropTypes.number,
  amountTake: PropTypes.number,
};

export const PaginationHandler = PaginationHandlerContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ indent }) => indent && `${spacing(3)} 0`};
`;
