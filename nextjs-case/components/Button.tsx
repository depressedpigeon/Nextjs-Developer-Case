import React from 'react';
import styled from 'styled-components';

function Button() {
  return (
    <ButtonDiv>
      <ButtonCss>claim all</ButtonCss>
    </ButtonDiv>
  );
}

const ButtonCss = styled.button`
  font-family: 'Pixelar';
  color: var(--yellowText);
  text-transform: uppercase;
  padding: 0.15rem 0.4rem;
  background-color: var(--buttonBg);
  border: 0.15rem solid var(--yellowText);
  margin: 1rem 0;
  `;

const ButtonDiv = styled.div`
  @media only screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
  } 
  `;

export default Button;