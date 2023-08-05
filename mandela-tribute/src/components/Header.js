import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    letter-spacing: 2px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Nelson Mandela Tribute</h1>
    </HeaderContainer>
  );
};

export default Header;
