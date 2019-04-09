import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

import images from '../theme/images';

const TabHeaderLogoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TabHeaderLogo = () => (
  <TabHeaderLogoContainer>
    <Image
      source={images.logo}
      style={{ resizeMode: 'contain', width: 120, height: 42 }}
    />
  </TabHeaderLogoContainer>
);
export default TabHeaderLogo;
