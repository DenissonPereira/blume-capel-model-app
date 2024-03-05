import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useSpinContext } from '../../contexts'

export const Spin3 = () => {
    
    const { spin3 } = useSpinContext();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Text></Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {spin3.map((spin) => 
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
}