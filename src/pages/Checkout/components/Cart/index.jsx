import React from 'react';
import { useCart } from '../../../../hooks/useCart';
import { CartItem } from '../CartItem';
import { CartContainer, Total, ConfirmButton } from './styles';

export function Cart() {
  const { cart, total, deliveryPrice, finalPrice } = useCart();

  return (
    <CartContainer>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <Total>
        <div>
          <span>Total de itens</span>
          <span>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {deliveryPrice.toFixed(2).replace('.', ',')}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {finalPrice.toFixed(2).replace('.', ',')}</strong>
        </div>
      </Total>
      <ConfirmButton type="submit" disabled={cart.length === 0}>
        Confirmar Pedido
      </ConfirmButton>
    </CartContainer>
  );
}
