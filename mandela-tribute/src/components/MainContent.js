import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TributeImage = styled.div`
  flex: 1;
  max-width: 40%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TributeText = styled.div`
  flex: 1;
  max-width: 60%;
  padding: 0 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.2rem;
  border-left: 4px solid #333;
  padding-left: 1rem;
  margin: 2rem 0;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <TributeImage>
        <img src="/nelson-mandela.jpg" alt="Nelson Mandela" />
      </TributeImage>
      <TributeText>
        <h2>Remembering Nelson Mandela</h2>
        <p>
          Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary,
          political leader, and philanthropist who served as President of South Africa
          from 1994 to 1999. He is widely regarded as an icon of democracy and social justice.
        </p>
        <Quote>
          "Education is the most powerful weapon which you can use to change the world."
        </Quote>
        <p>
          Throughout his life, Mandela fought tirelessly for equality, justice, and the end of apartheid.
          His legacy continues to inspire people worldwide to stand up for what is right and just.
        </p>
      </TributeText>
    </MainContainer>
  );
};

export default MainContent;
