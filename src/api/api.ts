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
    const response = await axios.post(`${apiUrl}/user-cards`, payload);
    console.log("User cards updated successfully:", response.data);
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

export async function updateUserCards(
  userId: number,
  payload: { cardId: number; quantity: number }
) {
  const { cardId, quantity } = payload;
  console.log("🚀 ~ cardId, quantity:", cardId, quantity);
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
    console.log("🚀 ~ response:", response);
    return response.data.itemCount;
  } catch (error) {
    console.error("Error fetching user cart item count:", error);
    return undefined;
  }
};
