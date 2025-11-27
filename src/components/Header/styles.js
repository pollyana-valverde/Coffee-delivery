import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  aside {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    img {
      max-width: 70px;
    }
  }
`;

const BaseCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
`;

export const Location = styled(BaseCard)`
  gap: 0.25rem;
  background: #EBE5F9;
  color: #4B2995;
  font-size: 0.875rem;

  svg {
    color: #8047F8;
  }
`;

export const Cart = styled(BaseCard)`
  background: #F1E9C9;
  position: relative;

  svg {
    color: #C47F17;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #C47F17;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
