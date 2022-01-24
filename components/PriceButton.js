import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colorPalette from '../assets/Colors';

const PriceButton = ({ price, selectedValue, onTap }) => {
    return (
        <TouchableOpacity
            style={(price === selectedValue) ? styles.selectedCard : styles.card}
            onPress={onTap}
        >
            <Text style={(price === selectedValue) ? styles.selectedContent : styles.content}>{price} €</Text>
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
        marginHorizontal: 4.5,
    },
    selectedCard: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: colorPalette.White,
        width: 80,
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4.5,
    },
    content: {
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        color: colorPalette.White,
    },
    selectedContent: {
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        color: colorPalette.Blue,
    },
})

export default PriceButton
