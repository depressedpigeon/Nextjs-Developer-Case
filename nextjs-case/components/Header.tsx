import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderCss>
      <Heading1>My inbox</Heading1>
      <Paragraph>Redeem your packs</Paragraph>
    </HeaderCss>
  );
}

const HeaderCss = styled.header`
  text-align: center;
`;

const Heading1 = styled.h1`
  font-size: 3rem;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
`;

export default Header;