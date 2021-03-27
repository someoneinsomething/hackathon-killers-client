import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Text, Link } from '../../components';
import { getActiveNavigationLink } from '../../utils/navigation';
import { spacing, colors, sizes } from '../../theme';

export const DesktopMenu = ({ items, activePath }) => {
  const activeLink = getActiveNavigationLink({ items, activePath });

  return (
    <Container>
      {items.map(({ tid, path, id }) => {
        return (
          <React.Fragment key={id}>
            <Item underline="none" href={path} active={activeLink && activeLink.id === id ? 1 : 0}>
              <Text tid={tid} />
            </Item>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: ${colors.textPrimary};
`;

const Item = styled(Link)`
  && {
    padding: ${spacing(4)} 0;
    font-size: ${sizes.font.default};
    ${(p) => {
      if (p.active) {
        return css`
          color: ${colors.primary} !important;
          &&:hover {
            color: ${colors.primary} !important;
          }
        `;
      }
      return '';
    }}
    &:not(:last-of-type) {
      margin-right: ${spacing(5)};
    }
  }
`;

DesktopMenu.propTypes = {
  items: PropTypes.array.isRequired,
  activePath: PropTypes.string,
};
