import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { useSpinContext } from '../../contexts';

export const Spin1 = () => {

    const { spin1 } = useSpinContext();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Text></Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {spin1.map((spin) => 
                    <View style={styles.container} key={spin.id}>
                        <Text style={styles.text}>Temperatura: {spin.temperatura}</Text>
                        <Text style={styles.text}>m_A: {spin.m_a}</Text>
                        <Text style={styles.text}>m_B: {spin.m_b}</Text>
                        <Text style={styles.text}>mag_staggered: {spin.mag_staggered}</Text>
                        <Text style={styles.text}>mag_total: {spin.mag_total}</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>

    )
};
