import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { PaymentContainer, PaymentHeader, PaymentOptions, Option } from './styles';

export function Payment() {
  const { register } = useFormContext();

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentHeader>
      <PaymentOptions>
        <Option>
          <input type="radio" id="credit" value="credit" {...register('paymentMethod')} />
          <label htmlFor="credit">
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </label>
        </Option>
        <Option>
          <input type="radio" id="debit" value="debit" {...register('paymentMethod')} />
          <label htmlFor="debit">
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </label>
        </Option>
        <Option>
          <input type="radio" id="money" value="money" {...register('paymentMethod')} />
          <label htmlFor="money">
            <Money size={16} />
            DINHEIRO
          </label>
        </Option>
      </PaymentOptions>
    </PaymentContainer>
  );
}
