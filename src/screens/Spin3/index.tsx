import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const Spin3 = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Spin3</Text>
            </View>
        </SafeAreaView>

    )
}