import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colorPalette from '../assets/Colors';

const AmountCard = ({amount}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.amount}>{amount}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 109,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPalette.White
    },
    amount: {
        // fontFamily: 'Circular Std',
        fontSize: 28, 
        lineHeight: 34,
        textAlign: 'center',
        fontWeight: '400',
        color: colorPalette.Black
    }
})

export default AmountCard
