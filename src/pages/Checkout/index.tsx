import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { ButtonGeneric } from "../../components/ButtonGeneric";
import { InputGeneric } from "../../components/InputGeneric";
import { TextM, TextS, TitleXs } from "../../styles/global";
import { SessionContainer } from "../Cart/styles";
import {
  ButtonContainer,
  InputContainer,
  Inputs,
  OrderContainer,
  OrderContent,
  OrderTitleContainer,
  PaymentContainer,
  StyledDollar,
  StyledMapPin,
  TitleContainer,
} from "./styles";

export function Checkout() {
  return (
    <>
      <OrderContainer>
        <TitleXs>Complete seu pedido</TitleXs>
        <SessionContainer>
          <OrderContent>
            <OrderTitleContainer>
              <StyledMapPin size={24} />
              <TitleContainer>
                <TextM $fontWeight="normal">Endereço de Entrega</TextM>
                <TextS $fontWeight="normal">
                  Informe o endereço onde deseja receber seu pedido
                </TextS>
              </TitleContainer>
            </OrderTitleContainer>
          </OrderContent>

          <InputContainer>
            <InputGeneric
              idLabel="cep"
              textLabel="CEP"
              type="number"
              width="half"
              mHorizontal={false}
              limit={255}
            />
            <InputGeneric
              idLabel="rua"
              textLabel="Rua"
              type="text"
              width="full"
              mHorizontal={false}
              limit={255}
            />
            <Inputs>
              <InputGeneric
                idLabel="numero"
                textLabel="Número"
                type="text"
                width="half"
                mHorizontal={true}
                limit={255}
              />
              <InputGeneric
                idLabel="complemento"
                textLabel="Complemento"
                textLabelOptimal="Opcional"
                type="text"
                width="full"
                mHorizontal={false}
                limit={255}
              />
            </Inputs>
            <Inputs>
              <InputGeneric
                idLabel="bairro"
                textLabel="Bairro"
                type="text"
                width="half"
                mHorizontal={true}
                limit={255}
              />
              <InputGeneric
                idLabel="cidade"
                textLabel="Cidade"
                type="text"
                width="half"
                mHorizontal={true}
                limit={255}
              />
              <InputGeneric
                idLabel="uf"
                textLabel="UF"
                type="text"
                width="small"
                mHorizontal={false}
                limit={2}
              />
            </Inputs>
          </InputContainer>
        </SessionContainer>

        <PaymentContainer>
          <OrderContent>
            <OrderTitleContainer>
              <StyledDollar size={24} />
              <TitleContainer>
                <TextM $fontWeight="normal">Pagamento</TextM>
                <TextS $fontWeight="normal">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextS>
              </TitleContainer>
            </OrderTitleContainer>
          </OrderContent>
          <ButtonContainer>
            <ButtonGeneric>
              <CreditCard size={16} /> Cartão de crédito
            </ButtonGeneric>
            <ButtonGeneric>
              <Bank size={16} />
              Cartão de débito
            </ButtonGeneric>
            <ButtonGeneric>
              <Money size={16} />
              Dinheiro
            </ButtonGeneric>
          </ButtonContainer>
        </PaymentContainer>
      </OrderContainer>
    </>
  );
}
