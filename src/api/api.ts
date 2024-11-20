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
    console.log(1);
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
    console.log(2);
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
