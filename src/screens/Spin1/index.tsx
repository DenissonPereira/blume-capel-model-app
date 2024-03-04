import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles'

export const Spin1 = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Spin11</Text>
            </View>
        </SafeAreaView>

    )
}