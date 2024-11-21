import { useState, useEffect } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { InputGeneric } from "../../components/InputGeneric";
import { RadioInput } from "../../components/RadioInput";
import { ButtonGeneric, TextM, TextS, TitleXs } from "../../styles/global";
import {
  ButtonContainer,
  InputContainer,
  Inputs,
  OrderContainer,
  OrderContent,
  OrderTitleContainer,
  SessionContainer,
  StyledDollar,
  StyledMapPin,
  TitleContainer,
} from "./styles";
import { createForm, fetchLastFormByUser, FormInterface } from "../../api/api";

export function Checkout() {
  const [formValues, setFormValues] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    paymentOption: "",
    cards: [],
  });

  const [lastForm, setLastForm] = useState<FormInterface | null>(null);

  const fetchFormData = async (userId: number) => {
    try {
      const form = await fetchLastFormByUser(userId);
      setLastForm(form);
    } catch (error) {
      console.error("Error fetching last form:", error);
    }
  };

  useEffect(() => {
    const userId = 1;
    fetchFormData(userId);
  }, []);

  const handleChange = (id: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePaymentOptionChange = (value: string) => {
    setFormValues((prev) => ({
      ...prev,
      paymentOption: value,
    }));
  };

  const handleSubmit = async () => {
    const userId = 1;
    const payload = {
      userId,
      rua: formValues.rua,
      bairro: formValues.bairro,
      cep: formValues.cep,
      cidade: formValues.cidade,
      complemento: formValues.complemento,
      numero: formValues.numero,
      uf: formValues.uf,
      paymentOption: formValues.paymentOption,
    };

    try {
      const response = await createForm(payload);
      if (response) {
        window.location.href = "/entrega";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <OrderContainer>
      <TitleXs>Complete seu pedido</TitleXs>

      {/* Address Section */}
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
        <InputContainer method="dialog">
          <InputGeneric
            idLabel="cep"
            textLabel="CEP"
            type="text"
            width="half"
            mHorizontal={false}
            limit={255}
            value={formValues.cep}
            onChange={(e) => handleChange("cep", e.target.value)}
          />
          <InputGeneric
            idLabel="rua"
            textLabel="Rua"
            type="text"
            width="full"
            mHorizontal={false}
            limit={255}
            value={formValues.rua}
            onChange={(e) => handleChange("rua", e.target.value)}
          />
          <Inputs>
            <InputGeneric
              idLabel="numero"
              textLabel="Número"
              type="text"
              width="half"
              mHorizontal={true}
              limit={255}
              value={formValues.numero}
              onChange={(e) => handleChange("numero", e.target.value)}
            />
            <InputGeneric
              idLabel="complemento"
              textLabel="Complemento"
              textLabelOptimal="Opcional"
              type="text"
              width="full"
              mHorizontal={false}
              limit={255}
              value={formValues.complemento}
              onChange={(e) => handleChange("complemento", e.target.value)}
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
              value={formValues.bairro}
              onChange={(e) => handleChange("bairro", e.target.value)}
            />
            <InputGeneric
              idLabel="cidade"
              textLabel="Cidade"
              type="text"
              width="half"
              mHorizontal={true}
              limit={255}
              value={formValues.cidade}
              onChange={(e) => handleChange("cidade", e.target.value)}
            />
            <InputGeneric
              idLabel="uf"
              textLabel="UF"
              type="text"
              width="small"
              mHorizontal={false}
              limit={2}
              value={formValues.uf}
              onChange={(e) => handleChange("uf", e.target.value)}
            />
          </Inputs>
        </InputContainer>
      </SessionContainer>

      {/* Payment Section */}
      <SessionContainer>
        <OrderContent>
          <OrderTitleContainer>
            <StyledDollar size={24} />
            <TitleContainer>
              <TextM $fontWeight="normal">Pagamento</TextM>
              <TextS $fontWeight="normal">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextS>
            </TitleContainer>
          </OrderTitleContainer>
        </OrderContent>
        <ButtonContainer>
          <RadioInput
            labelId="cartaoCredito"
            inputValue="cartaoCredito"
            relation="paymentOption"
            onChange={handlePaymentOptionChange}
            isChecked={formValues.paymentOption === "cartaoCredito"}
          >
            <CreditCard size={16} /> Cartão de crédito
          </RadioInput>
          <RadioInput
            labelId="cartaoDebito"
            inputValue="cartaoDebito"
            relation="paymentOption"
            onChange={handlePaymentOptionChange}
            isChecked={formValues.paymentOption === "cartaoDebito"}
          >
            <Bank size={16} /> Cartão de débito
          </RadioInput>
          <RadioInput
            labelId="dinheiro"
            inputValue="dinheiro"
            relation="paymentOption"
            onChange={handlePaymentOptionChange}
            isChecked={formValues.paymentOption === "dinheiro"}
          >
            <Money size={16} /> Dinheiro
          </RadioInput>
        </ButtonContainer>
      </SessionContainer>

      <ButtonGeneric $color="default" onClick={handleSubmit}>
        Finalizar Pedido
      </ButtonGeneric>
    </OrderContainer>
  );
}
