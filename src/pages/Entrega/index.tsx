import {
  CheckoutCointainer,
  ContainerSide,
  DeliveryCardContainer,
  DevilveryContainer,
  IconContainer,
  InfoCard,
  SubTitleContainer,
  TextAdress,
  TextContainer,
  TitleCart,
} from "./styles";
import Lottie from "lottie-react";
import Delivery from "../../assets/delivery.json";
import Delivery2 from "../../assets/delivery2.json";
import Delivery3 from "../../assets/delivery3.json";
import Delivery4 from "../../assets/delivery4.json";
import { Clock, CurrencyDollarSimple, MapPin } from "@phosphor-icons/react";
import { FormInterface, fetchLastFormByUser } from "../../api/api";
import { useEffect, useState } from "react";

const getRandomAnimation = () => {
  const animations = [Delivery, Delivery2, Delivery3, Delivery4];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

export function Entrega() {
  const randomAnimation = getRandomAnimation();

  const [formData, setFormData] = useState<FormInterface>();

  const fetchForm = async () => {
    const response = await fetchLastFormByUser(1);
    console.log(response);
    setFormData(response);
  };

  useEffect(() => {
    fetchForm();
  }, []);

  return (
    <CheckoutCointainer>
      <ContainerSide>
        <DevilveryContainer>
          <TextContainer>
            <TitleCart>Uhu! Pedido confirmado!</TitleCart>
            <SubTitleContainer>
              Agora é só aguardar que logo o café chegará até você
            </SubTitleContainer>
          </TextContainer>
          <DeliveryCardContainer>
            <InfoCard>
              <IconContainer $color="purple-main">
                <MapPin weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>
                  Entrega em:{" "}
                  <b>
                    {formData?.rua}, {formData?.numero}
                  </b>
                </TextAdress>
                <TextAdress>
                  {formData?.bairro} -{" "}
                  {formData?.complemento ? formData?.complemento : null} -{" "}
                  {formData?.cidade}, {formData?.uf}
                </TextAdress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-main">
                <Clock weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>Previsão de entrega:</TextAdress>
                <TextAdress>
                  <b>20 min - 30 min</b>
                </TextAdress>
              </TextContainer>
            </InfoCard>
            <InfoCard>
              <IconContainer $color="yellow-dark">
                <CurrencyDollarSimple weight="fill" color="white" />
              </IconContainer>
              <TextContainer>
                <TextAdress>Pagamento na Entrega</TextAdress>
                <TextAdress>{formData?.paymentOption}</TextAdress>
              </TextContainer>
            </InfoCard>
          </DeliveryCardContainer>
        </DevilveryContainer>
        <Lottie
          animationData={randomAnimation}
          loop={true}
          style={{ maxHeight: "284px", marginTop: "4rem", minWidth: "492px" }}
        />
      </ContainerSide>
    </CheckoutCointainer>
  );
}
