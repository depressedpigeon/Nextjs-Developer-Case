import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <Wrapper>
      <Navigation />
      <Header />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--darkBg);
  height: 100vh;
`;