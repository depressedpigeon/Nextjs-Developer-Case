import React from 'react';
import styled from 'styled-components';

function Navigation() {
  return (
    <Nav>
      <List>
        <ListItem>home</ListItem>
        <ListItem>store</ListItem>
        <ListItem>marketplace</ListItem>
        <ListItem>dexicon</ListItem>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  text-transform: uppercase;
  text-align: center;
`;

const List = styled.ul`
  padding: 1rem;
`;

const ListItem = styled.li`
  color: var(--yellowText);
  list-style: none;
  display: inline-block;
  padding: 0 0.5rem;
`;

export default Navigation;