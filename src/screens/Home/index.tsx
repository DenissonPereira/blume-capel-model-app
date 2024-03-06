import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { Cabecario, Caixas, Search, Slides } from '../../components'

export const Home = () => {
  return (
      <ScrollView style={styles.container}>
        <Cabecario />
        <Search />
        <Slides />
        <Caixas />
      </ScrollView>
  )
}
