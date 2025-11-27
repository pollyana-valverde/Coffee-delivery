import React from 'react';
import { useFormContext } from 'react-hook-form';
import { MapPinLine } from 'phosphor-react';
import { FormContainer, FormHeader, Input } from './styles';

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <FormHeader>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeader>
      <Input placeholder="CEP" {...register('cep')} />
      <Input placeholder="Rua" {...register('rua')} style={{ gridColumn: 'span 3' }} />
      <Input placeholder="Número" {...register('numero')} />
      <Input placeholder="Complemento" {...register('complemento')} style={{ gridColumn: 'span 2' }} />
      <Input placeholder="Bairro" {...register('bairro')} />
      <Input placeholder="Cidade" {...register('cidade')} />
      <Input placeholder="UF" {...register('uf')} />
    </FormContainer>
  );
}
