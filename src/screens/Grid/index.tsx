import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { Cards } from '../../components'

export const Grid = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Cards />
        </View>
      </ScrollView>
    </View>
  )
}