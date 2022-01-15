import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colorPalette from '../assets/Colors'

const TextTab = ({content, selected}) => {
    return (
        <View style={selected ? styles.selectedCard : styles.card}>
            <Text style={selected ? styles.selectedCard : styles.card }>{content}</Text>
        </View>
    )
}

export default TextTab

const styles = StyleSheet.create({
    card: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        // fontFamily: 'Circular Std',
        color: colorPalette.White,
        height: 26,
        width: 30
    },
    selectedCard: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        // fontFamily: 'Circular Std',
        color: colorPalette.Blue,
        borderBottomColor: colorPalette.Blue,
        borderBottomWidth: 2,
    }
})
