import React from 'react';
import styled from 'styled-components';

import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export const HeaderView = ({ ...props }) => {
  return (
    <Container>
      <Desktop>
        <DesktopHeader {...props} />
      </Desktop>
      <Mobile>
        <MobileHeader {...props} />
      </Mobile>
    </Container>
  );
};

const Container = styled.div``;

const Mobile = styled.div`
  @media all and (min-width: 1200px) {
    display: none;
  }
`;

const Desktop = styled.div`
  @media all and (max-width: 1199px) {
    display: none;
  }
`;
