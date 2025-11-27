import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { AddressForm } from './components/AddressForm';
import { Payment } from './components/Payment';
import { Cart } from './components/Cart';
import { CheckoutContainer } from './styles';

export function Checkout() {
  const methods = useForm();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  function handleSubmit(data) {
    console.log(data);
    clearCart();
    navigate('/success', { state: data });
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={methods.handleSubmit(handleSubmit)}>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressForm />
          <Payment />
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <Cart />
        </div>
      </CheckoutContainer>
    </FormProvider>
  );
}
