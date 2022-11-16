import React from 'react';
import styled from 'styled-components';

import Notification from './Notification';
import Button from './Button';

import starter from '../assets/images/starter.png';
import cursed from '../assets/images/cursed.png';
import shiny from '../assets/images/shiny.png';

function Main() {
  const notification = [
    {
      img: starter,
      packs: 4,
      title: 'Basic Beast Starter Pack',
      price: 40.00
    },
    {
      img: cursed,
      packs: 2,
      title: 'Cursed Black Pack',
      price: 600.00
    },
    {
      img: shiny,
      packs: 1,
      title: 'Shiny Gold',
      price: 999
    }
  ];

  // console.log(notification);

  return (
    <MainCss>
      {notification.map((notif, index) => {
        return (
          <Notification
            key={index}
            img={notif.img}
            packs={notif.packs}
            title={notif.title}
            price={notif.price}
          />
        );
      })}
      <Button />
    </MainCss>
  );
}

const MainCss = styled.main`
  width: 65%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 2rem 5vw;
  } 
`;

export default Main;