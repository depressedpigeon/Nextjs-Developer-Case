import React from 'react'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Main from '../components/Main'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #141b24;
  height: 100vh;
`

export default function Home() {
  return (
    <Wrapper>
      <Navigation/>
      <Header/>
      <Main/>
    </Wrapper>
  )
}
