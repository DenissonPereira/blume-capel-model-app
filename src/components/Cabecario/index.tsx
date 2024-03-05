import { Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles'

export const Cabecario = () => {
    return (
      <SafeAreaView style={styles.safe}>
        <View>
          <Text style={styles.text1}>Hello!</Text>
          <Text style={styles.text2}>Seja bem-vindo</Text>
          <Text style={styles.text3}>Explore as aplicações da nossa versão beta.</Text>
        </View>
      </SafeAreaView>
    )
}