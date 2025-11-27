import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0.25rem;
  border-bottom: 1px solid #E6E5E5;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  strong {
    font-weight: bold;
  }
`;

export const Actions = styled.div`
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
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #E6E5E5;
    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;

    svg {
      color: #8047F8;
    }
  }
`;
