import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Text } from '../../components';
import { linkRedirect, getActiveNavigationLink } from '../../utils/navigation';

export const MobileMenu = ({ items, activePath, onSelect }) => {
  const activeLink = getActiveNavigationLink({ items, activePath });

  return (
    <List component="div">
      {items.map(({ id, path, tid }) => (
        <React.Fragment key={id}>
          <ListItem
            button
            component="a"
            href={path}
            selected={activeLink && activeLink.id === id ? 1 : 0}
            onClick={(e) => {
              linkRedirect(path)(e);
              onSelect();
            }}
          >
            <ListItemText primary={<Text tid={tid} />} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

MobileMenu.propTypes = {
  items: PropTypes.array.isRequired,
  activePath: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
