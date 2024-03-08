import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        padding: 5,
        color: '#08224E',
        
    },
    underline: {
        borderBottomColor: '#ECAC48', 
        borderBottomWidth: 3,       
        width: 250,
        marginBottom: 70,
      },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    container2: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    buttonContainer: {
        width: 150,
        marginBottom: 50
    },
    subredes: {

    },
    magnetizacoes: {
        marginBottom: 190,
    },
    text: {
        fontSize: 20,
        color: '#08224E'
    },
    input: {
        fontSize: 20,
        color: '#FF5949',
        backgroundColor: '#7bafd12a'
    },
    respostas: {
        color: '#01CD88'
    },
});