import styled from 'styled-components';

export const CartContainer = styled.div`
  background: #F3F2F2;
  padding: 2.5rem;
  border-radius: 6px 44px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  background: #DBAC2C;
  color: white;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #C47F17;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
