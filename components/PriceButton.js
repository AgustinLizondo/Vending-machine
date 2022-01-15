import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colorPalette from '../assets/Colors';

const PriceButton = ({price}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.content}>{price} €</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        borderWidth: 1,
        borderColor: colorPalette.White,
        width: 80,
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        color: colorPalette.White,
    }
})

export default PriceButton
