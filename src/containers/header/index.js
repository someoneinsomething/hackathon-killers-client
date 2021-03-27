import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { HeaderView } from './View';

export const HeaderContainer = ({ activePath, typePath }) => {
  const isLoaded = () => typePath !== null;

  return <HeaderView activePath={activePath} typePath={typePath} loaded={isLoaded()} />;
};

const mapStateToProps = ({ navigation: { activePath, typePath } }) => ({
  activePath,
  typePath,
});

HeaderContainer.propTypes = {
  activePath: PropTypes.string,
  typePath: PropTypes.string,
};

export const Header = compose(connect(mapStateToProps))(HeaderContainer);
