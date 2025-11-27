import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5rem 10rem;

  h1 {
    font-size: 2rem;
    color: #C47F17;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

    &::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 6px 36px;
    z-index: -1;
    margin: 1px;
    background: #FAFAFA;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 5px;
      border-radius: 50%;
      color: white;
    }

    &:nth-child(1) svg { background: #8047F8; }
    &:nth-child(2) svg { background: #DBAC2C; }
    &:nth-child(3) svg { background: #C47F17; }
  }
`;
