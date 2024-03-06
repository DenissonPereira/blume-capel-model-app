import { Image, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { Component } from 'react'
import { useRootesHook } from '../../hooks/useRootesHook'; 7
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';
import Verde from '../../assets/images/verde.png'
import Azul from '../../assets/images/azul.png'
import Vermelho from '../../assets/images/vermelho.png'
import Laranja from '../../assets/images/laranja.png'
import { Entypo } from '@expo/vector-icons'

export const Caixas = () => {

    const { navigate } = useRootesHook();

    return (
        <SafeAreaView style={styles.safe}>
            <Text style={styles.textCabecario}>Obtenha todos os dados por spin</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.card1} onPress={() => navigate('Spin1')}>
                    <View style={styles.view}>
                        <Image source={Verde} style={styles.image} />
                        <Entypo name='dots-three-vertical' size={20} color={'white'} />
                    </View>
                    <View style={styles.teste}></View>
                    <View style={styles.teste2}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Spin-1/2 e Spin-1</Text>
                        <Text style={styles.text2}>1 Item</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card2} onPress={() => navigate('Spin2')}>
                    <View style={styles.view}>
                        <Image source={Vermelho} style={styles.image} />
                        <Entypo name='dots-three-vertical' size={20} color={'white'} />
                    </View>
                    <View style={styles.teste}></View>
                    <View style={styles.teste2}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Spin-1/2 e Spin-2</Text>
                        <Text style={styles.text2}>1 Item</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.card3} onPress={() => navigate('Spin1')}>
                    <View style={styles.view}>
                        <Image source={Laranja} style={styles.image} />
                        <Entypo name='dots-three-vertical' size={20} color={'white'} />
                    </View>
                    <View style={styles.teste}></View>
                    <View style={styles.teste2}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Spin-1/2 e Spin-3</Text>
                        <Text style={styles.text2}>1 Item</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card4} onPress={() => navigate('Spin2')}>
                    <View style={styles.view}>
                        <Image source={Azul} style={styles.image} />
                        <Entypo name='dots-three-vertical' size={20} color={'white'} />
                    </View>
                    <View style={styles.teste}></View>
                    <View style={styles.teste2}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Ajuda</Text>
                        <Text style={styles.text2}>1 Item</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}