import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Cards } from '../../components'

export const Grid = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            <Cards/>
        </Text>
    </View>
  )
}