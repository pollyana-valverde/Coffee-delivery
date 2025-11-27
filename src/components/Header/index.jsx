import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer, Location, Cart } from './styles';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <aside>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && <span>{cart.length}</span>}
          </Cart>
        </NavLink>
      </aside>
    </HeaderContainer>
  );
}
