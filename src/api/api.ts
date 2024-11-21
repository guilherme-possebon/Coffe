import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export interface ApiResponse {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  tags: string[];
  text: string;
}

export type CardsIdsType = {
  id: number;
  card: {
    id: number;
  };
};

export interface UserCardsResponse {
  id: number;
  user: {
    id: number;
    name: string;
    password: string;
  };
  card: {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    text: string;
    tags: string[];
  };
  quantity: number;
}

export interface UserCardPayload {
  userId: number;
  cards: {
    cardId: number;
    quantity: number;
  }[];
}

export interface UpdateUserCardPayload {
  cardId: number;
  quantity: number;
}

export interface FormInterface {
  userId: number;
  rua: string;
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  numero: string;
  uf: string;
  paymentOption: string;
}

export const fetchData = async (): Promise<ApiResponse[] | undefined> => {
  try {
    const response = await axios.get(apiUrl + "/cards");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addUserCards = async (payload: UserCardPayload): Promise<void> => {
  try {
    await axios.post(`${apiUrl}/user-cards`, payload);
  } catch (error) {
    console.error("Error adding/updating user cards:", error);
    throw error;
  }
};

export const fetchCardById = async (
  id: number
): Promise<UserCardsResponse[] | undefined> => {
  try {
    const response = await axios.get(`${apiUrl}/user-cards/${id}/cards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching card data:", error);
  }
};

export const fetchUserCards = async (
  id: number
): Promise<CardsIdsType[] | undefined> => {
  try {
    const response = await axios.get(`${apiUrl}/user-cards/${id}/cardsid`);
    return response.data;
  } catch (error) {
    console.error("Error fetching card data:", error);
  }
};

export async function updateUserCards(
  userId: number,
  payload: { cardId: number; quantity: number }
) {
  const response = await axios.post(
    `${apiUrl}/user-cards/${userId}/cards`,
    payload
  );
  return response.data;
}

export const fetchUserCartItemCount = async (
  userId: number
): Promise<number | undefined> => {
  try {
    const response = await axios.get(
      `${apiUrl}/user-cards/${userId}/cartItemCount`
    );
    return response.data.itemCount;
  } catch (error) {
    console.error("Error fetching user cart item count:", error);
    return undefined;
  }
};

export const createForm = async (payload: {
  userId: number;
  rua: string;
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  numero: string;
  uf: string;
  paymentOption: string;
}): Promise<FormInterface> => {
  try {
    const response = await axios.post(`${apiUrl}/forms`, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating form:", error);
    throw error;
  }
};

export const fetchFormById = async (id: number): Promise<FormInterface> => {
  try {
    const response = await axios.get(`${apiUrl}/forms/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching form by ID:", error);
    throw error;
  }
};

export const fetchLastFormByUser = async (
  userId: number
): Promise<FormInterface> => {
  try {
    const response = await axios.get(`${apiUrl}/forms/user/${userId}`);
    console.log(response.data, "response");
    const lastForm = response.data;
    console.log(lastForm, "lastForm");
    return lastForm;
  } catch (error) {
    console.error("Error fetching last form by user:", error);
    throw error;
  }
};
