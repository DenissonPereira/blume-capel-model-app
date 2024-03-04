import axios from "axios";
import { Item } from "../model";

const BASE_URL = "http://10.0.0.206:3000/";


export const api = axios.create({
  baseURL: BASE_URL,
});

export const pegarDados = async (): Promise<Item[] | undefined> => {
  try {
    const { data } = await api.get("spin_12_1");
    if (data && data.spin_1) {
      const mag: Item[] = data.spin_1;
      return mag;
    } else {
      console.error("Resposta da API mal formatada:", data);
      return undefined;
    }
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
    return undefined;
  }
};

