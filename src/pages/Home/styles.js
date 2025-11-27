import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 10rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Intro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.75rem 0;

  > div {
    max-width: 588px;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
    padding: 2rem 0;

    img {
      max-width: 300px;
    }
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 3rem;
    color: #272221;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    color: #403937;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 5px;
      border-radius: 50%;
      color: white;
    }

    &:nth-child(1) svg { background: #C47F17; }
    &:nth-child(2) svg { background: #574F4D; }
    &:nth-child(3) svg { background: #DBAC2C; }
    &:nth-child(4) svg { background: #8047F8; }
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
    justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;

export const CoffeeList = styled.section`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    color: #403937;
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }

  @media (max-width: 1200px) {
    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;
