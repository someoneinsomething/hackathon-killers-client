import React from 'react';
import PropTypes from 'prop-types';

import DrawerUI from '@material-ui/core/Drawer';

export const Drawer = ({ children, open, onClose, ...props }) => {
  return (
    <React.Fragment>
      <DrawerUI open={open} onClose={onClose} {...props}>
        {children}
      </DrawerUI>
    </React.Fragment>
  );
};

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
