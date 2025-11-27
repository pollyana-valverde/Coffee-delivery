import React from 'react';
import { Trash } from 'phosphor-react';
import { useCart } from '../../../../hooks/useCart';
import { ItemContainer, Actions } from './styles';

export function CartItem({ item }) {
  const { increase, decrease, removeFromCart } = useCart();

  return (
    <ItemContainer>
      <img src={item.image} alt={item.name} />
      <div>
        <span>{item.name}</span>
        <Actions>
          <div>
            <button onClick={() => decrease(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increase(item.id)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <Trash size={16} />
            Remover
          </button>
        </Actions>
      </div>
      <strong>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
    </ItemContainer>
  );
}
