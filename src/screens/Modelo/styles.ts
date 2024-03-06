import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    underline: {
        borderBottomColor: '#2F26D9', 
        borderBottomWidth: 3,       
        width: 250,
        marginBottom: 50,
      },
    text: {
        textAlign: 'justify',
        fontSize: 17,
        color: '#08224E'
    }
});