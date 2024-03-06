import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const Modelo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modelo de Blume-Capel</Text>
      <View style={styles.underline} />
      <Text style={styles.text}>
        É um modelo físico que descreve o comportamento magnético de sistemas físicos, como materiais ferromagnéticos. Ele é frequentemente usado na física estatística para estudar fenômenos relacionados ao magnetismo e à transição de fase. O modelo foi proposto independentemente por David J. Thouless e Raymond F. Capel em 1966 e subsequentemente refinado por Arnold M. S. Green. O modelo de Blume-Capel é uma generalização do Modelo de Ising, que é um dos modelos mais simples e importantes em física estatística para estudar fenômenos de transição de fase.
      </Text>
    </View>
  )
}
