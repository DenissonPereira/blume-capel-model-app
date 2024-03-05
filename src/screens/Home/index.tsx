import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Cabecario, Caixas, Search } from '../../components'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Cabecario />
      <Search />
      <Caixas />
    </View>
  )
}
