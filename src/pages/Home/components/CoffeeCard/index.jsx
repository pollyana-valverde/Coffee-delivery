import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { useCart } from '../../../../hooks/useCart';
import { Card, Tags, Price, Order } from './styles';

export function CoffeeCard({ coffee }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  function handleAddToCart() {
    addToCart(coffee.id, coffee.name, coffee.price, coffee.image, quantity);
  }

  return (
    <Card>
      <img src={coffee.image} alt={coffee.name} />
      <Tags>
        {coffee.tags.map(tag => <span key={tag}>{tag.toUpperCase()}</span>)}
      </Tags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <footer>
        <Price>
          <span>R$</span>
          <strong>{coffee.price.toFixed(2).replace('.', ',')}</strong>
        </Price>
        <Order>
          <div>
            <button onClick={() => setQuantity(state => Math.max(1, state - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(state => state + 1)}>+</button>
          </div>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Order>
      </footer>
    </Card>
  );
}
