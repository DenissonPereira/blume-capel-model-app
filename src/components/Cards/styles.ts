import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 20
    },
    card1: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#7FB9F2',
        marginTop: 20,
        width: 350,
        height: 150,
        borderRadius: 15,
        gap: 20,
    },
    card2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6AB68',
        width: 350,
        height: 150,
        borderRadius: 15,
    },
    card3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6CE7D1',
        width: 350,
        height: 150,
        borderRadius: 15,
    },
});