import styled from 'styled-components';

export const PaymentContainer = styled.div`
  background: #F3F2F2;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 0.75rem;
`;

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: #8047F8;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #403937;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Option = styled.div`
  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #E6E5E5;
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      background: #D7D5D5;
    }

    svg {
      color: #8047F8;
    }
  }

  input:checked + label {
    background: #EBE5F9;
    border-color: #8047F8;
  }
`;
