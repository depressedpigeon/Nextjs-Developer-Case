import React from 'react';
import styled from 'styled-components';

interface Notification {
  img: any;
  packs: number;
  title: string;
  price: number;
}

function Notification(props: Notification) {
  return (
    <Wrapper>
      <PictureDiv>
        <Img src={props.img.src} alt={props.title} />
      </PictureDiv>
      <TextDiv>
        <Heading2>You recieved {props.packs} new packs</Heading2>
        <PTitle>{props.title}</PTitle>
        <p>USD ${props.price}</p>
      </TextDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--grey);
`;

const PictureDiv = styled.div`
  display: inline-block;
  height: 4rem;

  @media only screen and (max-width: 400px) {
    height: 2.5rem;
  } 
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding-right: 1rem;
`;

const TextDiv = styled.div`
  display: inline-block;
  height: 4rem;
  color: var(--grey);

  @media only screen and (max-width: 400px) {
    height: 2.5rem;
  } 
`;

const Heading2 = styled.h2`
@media only screen and (max-width: 400px) {
  font-size: 1.2rem;
} 
`;

const PTitle = styled.p`
  font-weight: bold;
`;


export default Notification;