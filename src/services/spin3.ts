import { api } from ".";
import { Spin } from "../model";


export async function loadSpin3(setSpin3: (setSpin3: Spin[]) => void) {
    try{
        const { data } = await api.get('spin_12_3');
        if(data?.status) {
            setSpin3(data.spin_3);
            return data.spin_3;
        }
    } catch (error) {
        console.error('Erro ao chamar API: ', error);
        return undefined;
    }
}