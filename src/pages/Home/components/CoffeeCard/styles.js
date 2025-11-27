import styled from 'styled-components';

export const Card = styled.div`
  background: #F3F2F2;
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: -2.5rem;
    max-width: 120px;
  }

  h3 {
    font-size: 1.25rem;
    color: #403937;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #8D8686;
    margin-bottom: 2rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    background: #F1E9C9;
    color: #C47F17;
    font-size: 0.625rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  color: #574F4D;

  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const Order = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #E6E5E5;
    padding: 0.5rem;
    border-radius: 6px;

    button {
      background: transparent;
      border: 0;
      color: #8047F8;
      cursor: pointer;
      line-height: 0;
    }
  }

  > button {
    background: #4B2995;
    color: white;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    line-height: 0;

    &:hover {
      background: #8047F8;
    }
  }
`;
