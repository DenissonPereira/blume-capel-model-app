import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Verde from '../../assets/images/verde.jpg'
import Vermelho from '../../assets/images/vermelho.jpg'
import Laranja from '../../assets/images/laranja.jpg'
import Azul from '../../assets/images/roxo.jpg'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Slides = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.viewImage}>
                    <Image source={Verde} style={styles.image} />
                    <View style={styles.text}>
                        <MaterialCommunityIcons name='math-integral-box' size={50} />
                        <Text style={styles.textDec}>Calculadora de Integrais</Text>
                    </View>
                </View>
                <View style={styles.viewImage}>
                    <Image source={Vermelho} style={styles.image} />
                    <View style={styles.text}>
                        <MaterialCommunityIcons name='math-sin' size={50} />
                        <Text style={styles.textDec}>Calculadora de seno</Text>
                    </View>
                </View>
                <View style={styles.viewImage}>
                    <Image source={Laranja} style={styles.image} />
                    <View style={styles.text}>
                        <MaterialCommunityIcons name='math-cos' size={50} />
                        <Text style={styles.textDec}>Calculadora de cosseno</Text>
                    </View>
                </View>
                <View style={styles.viewImage}>
                    <Image source={Azul} style={styles.image} />
                    <View style={styles.text}>
                        <MaterialCommunityIcons name='math-tan' size={50} />
                        <Text style={styles.textDec}>Calculadora de tangente</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}