import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;
  padding: 2.5rem 10rem;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 2.5rem 2rem;
    grid-template-columns: 1fr 350px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
