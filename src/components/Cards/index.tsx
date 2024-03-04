import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRootesHook } from "../../hooks/useRootesHook";
import { Fontisto } from '@expo/vector-icons';


export const Cards: React.FC = () => {
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
