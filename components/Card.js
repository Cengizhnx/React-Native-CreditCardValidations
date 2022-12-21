import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
import CardImage from './CardImage';

const circleSize = 250;

function Card({ name, number, date }) {

    let result = number.substr(0, 4) + " " + number.substr(4, 4) + " " + number.substr(8, 4) + " " + number.substr(12, 4)

    return (
        <View style={[s.container, s.card]}>

            <CardImage number={number.substr(0, 2)}></CardImage>

            <View style={s.cardNumberContainer}>
                <Text style={[s.text, { color: "black" }]}>{result}</Text>
            </View>
            <View style={s.footerContainer}>
                <Text style={[s.text, { color: "black" }]}>{name}</Text>
                <Text style={[s.text, { color: "black" }]}>{date === undefined ? "" : date.toLocaleDateString()}</Text>
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
        justifyContent: "space-between",
        marginBottom: 18
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        letterSpacing: 0.53
    },

});
export default Card