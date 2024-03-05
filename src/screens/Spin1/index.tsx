import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { useSpinContext } from '../../contexts';

export const Spin1 = () => {

    const { spin1 } = useSpinContext();

    return (
        <SafeAreaView style={styles.safeArea}>
            {spin1.map((spin) => 
                <View key={spin.id}>
                    <Text>Temperatura: {spin.temperatura}</Text>
                    <Text>m_A: {spin.m_b}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};
