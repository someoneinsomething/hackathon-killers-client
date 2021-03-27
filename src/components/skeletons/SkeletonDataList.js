import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, ListItemText } from '../lists';
import { Skeleton } from './index';

export const SkeletonDataItem = ({ divider = true, indent = true }) => (
  <ListItem divider={divider} indent={indent}>
    <ListItemText
      primary={
        <React.Fragment>
          <Skeleton variant="text" height={18} width="35%" />
          <Skeleton variant="text" height={18} width="20%" />
        </React.Fragment>
      }
    />
  </ListItem>
);

export const SkeletonDataList = ({ image, size = 'medium', divider = true, indent }) => {
  if (size === 'medium') {
    return (
      <List>
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
      </List>
    );
  }
  if (size === 'big') {
    return (
      <List>
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
        <SkeletonDataItem image={image} divider={divider} indent={indent} />
      </List>
    );
  }

  return null;
};

SkeletonDataList.propTypes = {
  image: PropTypes.bool,
  size: PropTypes.string,
  divider: PropTypes.bool,
  indent: PropTypes.bool,
};

SkeletonDataItem.propTypes = {
  divider: PropTypes.bool,
  indent: PropTypes.bool,
};
