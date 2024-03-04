import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const Spin2 = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Spin2</Text>
            </View>
        </SafeAreaView>

    )
}