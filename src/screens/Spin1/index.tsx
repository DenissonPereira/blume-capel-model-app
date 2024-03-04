import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { pegarDados } from '../../services';
import { Item } from '../../model';
import { styles } from './styles';

export const Spin1 = () => {
    const [dados, setDados] = useState<Item[]>([]);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const dadosDaApi = await pegarDados();
                console.log("Dados da API:", dadosDaApi);

                if (dadosDaApi !== undefined) {
                    setDados(dadosDaApi);
                }
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            }
        };

        carregarDados();
    }, []);


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Spin1</Text>
                <FlatList
                    data={dados}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>ID: {item.id}</Text>
                            <Text>Temperatura: {item.temperatura}</Text>
                            <Text>M_a: {item.m_a}</Text>
                            <Text>M_b: {item.m_b}</Text>
                            <Text>Mag Staggered: {item.mag_staggered}</Text>
                            <Text>Mag Total: {item.mag_total}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
