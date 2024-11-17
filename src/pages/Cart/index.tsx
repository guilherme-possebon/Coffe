// import { useEffect, useState } from "react";
// import {
//   fetchCardById,
//   updateUserCards,
//   UserCardsResponse,
// } from "../../api/api";
// import { CardHorizontal } from "../../components/CardHorizontal";
import {
  AddressContainer,
  AddressTitle,
  CartContainer,
  InputContainer,
  OrderContainer,
  SelectedCoffees,
  SessionContainer,
  TitleContainer,
} from "./styles";
// import Swal from "sweetalert2";
// import { useCart } from "../../context/cartContext";
import { TextM, TextS, TitleXs } from "../../styles/global";
import { MapPinLine } from "@phosphor-icons/react";
import { InputGeneric } from "./components/InputGeneric";

export function Cart() {
  // const [data, setData] = useState<UserCardsResponse[] | undefined>([]);
  // const userId = 1;

  // const { setCartItemsValue } = useCart();

  // const fetchCards = async () => {
  //   try {
  //     const response = await fetchCardById(userId);

  //     setData(response);
  //   } catch (error) {
  //     console.error("Failed to fetch cards:", error);
  //     Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
  //   }
  // };

  // const handleRemove = async (id: number, quantity: number) => {
  //   try {
  //     await updateUserCards(userId, { cardId: id, quantity: 0 });

  //     setData((prev) => prev?.filter((item) => item.card.id !== id));

  //     setCartItemsValue((prev: number) => prev - quantity);

  //     Swal.fire("Removido", "Café removido do carrinho.", "success");
  //   } catch (error) {
  //     console.error("Failed to remove card:", error);
  //     Swal.fire("Erro", "Falha ao remover o café.", "error");
  //   }
  // };

  // useEffect(() => {
  //   fetchCards();
  // }, []);

  return (
    <CartContainer>
      <OrderContainer>
        <SessionContainer>
          <TitleXs>Complete seu pedido</TitleXs>
          <AddressContainer>
            <AddressTitle>
              <MapPinLine size={24} />
              <TitleContainer>
                <TextM $fontWeight="normal">Endereço de Entrega</TextM>
                <TextS $fontWeight="normal">
                  Informe o endereço onde deseja receber seu pedido
                </TextS>
              </TitleContainer>
            </AddressTitle>
          </AddressContainer>
          <InputGeneric
            placeholderLabel="CEP"
            type="number"
            width="half"
            limit={255}
          />
          <InputGeneric
            placeholderLabel="Rua"
            type="text"
            width="full"
            limit={255}
          />
          <InputContainer>
            <InputGeneric
              placeholderLabel="Número"
              type="text"
              width="half"
              limit={255}
            />
            <InputGeneric
              placeholderLabel="Complemento"
              type="text"
              width="half"
              limit={255}
            />
          </InputContainer>
          <InputContainer>
            <InputGeneric
              placeholderLabel="Bairro"
              type="text"
              width="half"
              limit={255}
            />
            <InputGeneric
              placeholderLabel="Cidade"
              type="text"
              width="full"
              limit={255}
            />
            <InputGeneric
              placeholderLabel="UF"
              type="text"
              width="small"
              limit={2}
            />
          </InputContainer>
        </SessionContainer>
      </OrderContainer>
      <SelectedCoffees>
        <SessionContainer>
          <TitleXs>Cafés selecionados</TitleXs>
        </SessionContainer>
      </SelectedCoffees>
    </CartContainer>
  );
}

{
  /* <CartContainer>
  {data?.map((info) => (
    <CardHorizontal
      key={info.card.id}
      id={info.card.id}
      imgSrc={info.card.imgSrc}
      price={info.card.price}
      title={info.card.title}
      quantityNumber={info.quantity}
      onRemove={handleRemove}
    />
  ))}
</CartContainer>; */
}
