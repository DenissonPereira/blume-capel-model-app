import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRootesHook } from "../../hooks/useRootesHook";
import { Fontisto } from '@expo/vector-icons';
import MathView from 'react-native-math-view';

export const Cards: React.FC = () => {
    const { navigate } = useRootesHook();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.card1} onPress={() => navigate('Spin1')}>
                    <View>
                        <Fontisto name="react" size={70} />
                    </View>
                    <View>
                        <Text>Spin 1</Text>
                        <MathView
                            math={'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}'}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card2} onPress={() => navigate('Spin2')}>
                    <View>
                        <Fontisto name="react" size={50} />
                    </View>
                    <View>
                        <Text>Spin 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card3} onPress={() => navigate('Spin3')}>
                    <View>
                        <Fontisto name="react" size={50} />
                    </View>
                    <View>
                        <Text>Spin 3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
