import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { APP_MENU } from '../../constants/routes';

import { SkeletonMenu } from '../../components/skeletons';

import { FixedBar } from './FixedBar';
import { Drawer } from './Drawer';
import { MobileMenu } from './MobileMenu';
import { sizes } from '../../theme';

export const MobileHeader = ({ typePath, activePath, loaded }) => {
  const [activeAppMenu, setActiveAppMenu] = React.useState(false);
  return (
    <React.Fragment>
      <FixedBar>
        <Container>
          <ContentLayout>
            <ResponsiveLayout>
              <Content>
                {loaded ? (
                  <React.Fragment>
                    {typePath === 'app' && (
                      <React.Fragment>
                        <div>
                          <IconButton onClick={() => setActiveAppMenu(true)}>
                            <MenuIcon />
                          </IconButton>
                        </div>
                      </React.Fragment>
                    )}
                    {typePath === 'auth' && (
                      <React.Fragment>
                        <div>
                          <IconButton onClick={() => setActiveAppMenu(true)}>
                            <MenuIcon />
                          </IconButton>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <SkeletonMenu />
                )}
              </Content>
            </ResponsiveLayout>
          </ContentLayout>
        </Container>
      </FixedBar>
      <Drawer open={activeAppMenu} onClose={() => setActiveAppMenu(false)}>
        <MobileMenu items={APP_MENU} activePath={activePath} onSelect={() => setActiveAppMenu(false)} />
      </Drawer>
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

MobileHeader.propTypes = {
  loaded: PropTypes.bool.isRequired,
  activePath: PropTypes.string,
  typePath: PropTypes.string,
};
