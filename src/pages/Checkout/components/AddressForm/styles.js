import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #F3F2F2;
  padding: 2.5rem;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    input[style] {
      grid-column: auto !important;
    }
  }
`;

export const FormHeader = styled.div`
  grid-column: span 3;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  svg {
    color: #C47F17;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #403937;
  }

  p {
    font-size: 0.875rem;
  }

  @media (max-width: 600px) {
    grid-column: auto;
  }
`;

export const Input = styled.input`
  background: #EDEDED;
  border: 1px solid #E6E5E5;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;

  &::placeholder {
    color: #8D8686;
  }
`;
