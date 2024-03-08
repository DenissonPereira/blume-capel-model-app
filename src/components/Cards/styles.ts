import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safe: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        width: 250,
        textAlign: 'center',
        marginBottom: 5,
        color: '#08224E',
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
    },
    underline: {
        borderBottomColor: '#2F26D9', 
        borderBottomWidth: 3,       
        width: 250,
        marginBottom: 50,
      },
    card1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01CD88',
        marginTop: 20,
        width: 350,
        height: 150,
        borderRadius: 15,
        gap: 20,
    },
    card2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5949',
        width: 350,
        height: 150,
        borderRadius: 15,
        color: 'white',
        gap: 20
    },
    card3: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECAC48',
        width: 350,
        height: 150,
        borderRadius: 15,
        gap: 20
    },
    text: {
        color: 'white'
    }
});