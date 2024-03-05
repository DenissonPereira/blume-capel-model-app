import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { Component } from 'react'
import { useRootesHook } from '../../hooks/useRootesHook'; 7
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';

export const Caixas = () => {

    const { navigate } = useRootesHook();

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.card1} onPress={() => navigate('Spin1')}>
                    <View>
                        <Fontisto name="react" size={70} />
                    </View>
                    <View>
                        <Text>Spin 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card2} onPress={() => navigate('Spin2')}>
                    <View>
                        <Fontisto name="react" size={50} />
                    </View>
                    <View>
                        <Text>Spin 20</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.card3} onPress={() => navigate('Spin1')}>
                    <View>
                        <Fontisto name="react" size={70} />
                    </View>
                    <View>
                        <Text>Spin 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card4} onPress={() => navigate('Spin2')}>
                    <View>
                        <Fontisto name="react" size={50} />
                    </View>
                    <View>
                        <Text>Spin 20</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}