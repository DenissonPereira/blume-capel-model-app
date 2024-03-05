import { api } from ".";
import { Spin } from "../model";

export async function loadSpin1(setSpin1: (setSpin1: Spin[]) => void) {
    try {
        const { data } = await api.get('spin_12_1');
        if(data?.status) {
            setSpin1(data?.spin_1);
            return data.spin_1;
        }
        return data
    } catch (error) {
        console.error('Erro ao chamar a API: ', error);
        return undefined;
    }
}