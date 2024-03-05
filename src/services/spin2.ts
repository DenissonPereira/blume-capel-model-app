import { api } from ".";
import { Spin } from "../model";

export async function loadSpin2(setSpin2: (setSpin2: Spin[]) => void) {
    try {
        const { data } =  await api.get('spin_12_2');
        if(data?.status) {
            setSpin2(data?.spin_2);
            return data.spin_2;
        }
        return data
    } catch (error) {
        console.error('Erro ao chamar API: ', error);
        return undefined;
    }
}