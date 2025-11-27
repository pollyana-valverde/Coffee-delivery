import React from 'react';
import { useLocation } from 'react-router-dom';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { SuccessContainer, OrderInfo } from './styles';
import successImg from '../../assets/success-img.svg';

export function Success() {
  const { state } = useLocation();

  const paymentMethods = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
  };

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfo>
          <div>
            <MapPin size={26} weight="fill" />
            <span>
              Entrega em <strong>{state.rua}, {state.numero}</strong><br />
              {state.bairro} - {state.cidade}, {state.uf}
            </span>
          </div>
          <div>
            <Timer size={26} weight="fill" />
            <span>
              Previsão de entrega<br />
              <strong>20 min - 30 min</strong>
            </span>
          </div>
          <div>
            <CurrencyDollar size={26} weight="fill" />
            <span>
              Pagamento na entrega<br />
              <strong>{paymentMethods[state.paymentMethod]}</strong>
            </span>
          </div>
        </OrderInfo>
      </div>
      <img src={successImg} alt="" />
    </SuccessContainer>
  );
}
