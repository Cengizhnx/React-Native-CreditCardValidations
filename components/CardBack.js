import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import CardImage from './CardImage';

function CardBack({ number, cvv }) {

    return (
        <View style={[s.container, s.card]}>
            <CardImage number={number.substr(0, 2)}></CardImage>

            <View style={s.cardNumberContainer}>
                <View style={s.barcode}>

                </View>
                <Text style={[s.text, { color: "black" }]}>{cvv}</Text>
            </View>
        </View>

    )
}
const s = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 40,
        borderRadius: 12,
        width: 290,
    },
    card: {
        backgroundColor: "aliceblue",
        borderWidth: 1,
        borderColor: "#c1c2c3"
    },
    cardNumberContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 18
    },
    barcode: {
        width: 200,
        height: 20,
        borderRadius: 5,
        backgroundColor: "gray"
    }

});
export default CardBack