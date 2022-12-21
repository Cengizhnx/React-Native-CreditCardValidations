import React, { useEffect, useState } from 'react'
import { View, StyleSheet,Image } from 'react-native'
import Visa from "../assets/visa.jpg";
import Mastercard from "../assets/mastercard.jpg";
import American from "../assets/american.png";
import Discover from "../assets/discover.jpg";

function CardImage({number}) {

    const [image, setImage] = useState("")

    let temp = number.substr(0, 2)

    useEffect(() => {
        switch (temp) {
            case "41":
                setImage(Visa);
                break;
            case "52":
                setImage(Mastercard);
                break;
            case "60":
                setImage(Discover);
                break;
            case "34":
                setImage(American);
                break;
            default:
                setImage("");
        }
    }, [temp])

    return (
        <View style={s.logoContainer}>
            <Image style={s.logo} source={image}></Image>
        </View>
    )
}

const s = StyleSheet.create({
    logoContainer: { position: "relative", marginBottom: 24 },
    logo: {
        width: 80,
        height: 50,
        borderRadius: 5,
        resizeMode: "cover"
    }

});

export default CardImage