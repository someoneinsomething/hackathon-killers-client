import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { SkeletonMenu } from '../../components/skeletons';

import { APP_MENU } from '../../constants/routes';
import { sizes } from '../../theme';

import { FixedBar } from './FixedBar';
import { DesktopMenu } from './DesktopMenu';

export const DesktopHeader = ({ activePath, loaded }) => {
  return (
    <React.Fragment>
      <FixedBar>
        <Container>
          <ContentLayout>
            <ResponsiveLayout>
              <Content>
                {loaded ? (
                  <React.Fragment>
                    <DesktopMenu activePath={activePath} items={APP_MENU} />
                  </React.Fragment>
                ) : (
                  <SkeletonMenu />
                )}
              </Content>
            </ResponsiveLayout>
          </ContentLayout>
        </Container>
      </FixedBar>
    </React.Fragment>
  );
};

const Container = styled.div`
  background-color: #fff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.headerHeight};
`;

DesktopHeader.propTypes = {
  activePath: PropTypes.string,
  loaded: PropTypes.bool.isRequired,
};
