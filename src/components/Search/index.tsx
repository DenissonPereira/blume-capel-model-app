import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export const Search = () => {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.search}
            placeholder=' Pesqusiar...'
        />
        <Ionicons name='search' size={24} style={styles.icone} />
      </View>
    )
}