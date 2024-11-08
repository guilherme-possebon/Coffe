import axios from "axios";

const apiUrl = "http://177.44.248.4:3001";

export interface ApiResponse {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  tags: string[];
  text: string;
}

export const fetchData = async (): Promise<ApiResponse[] | undefined> => {
  try {
    const response = await axios.get(apiUrl + "/cards");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataWithIds = async (
  id: number[]
): Promise<ApiResponse[] | undefined> => {
  try {
    console.log(id);
    const response = await axios.get(apiUrl + `/cardsIds/`, {
      params: {
        ids: id,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return;
};
