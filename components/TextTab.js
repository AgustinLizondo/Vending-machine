import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors'

const TextTab = ({ content, selected }) => {
    return (
        <TouchableOpacity>
            <Text style={selected ? styles.selectedCard : styles.card}>{content}</Text>
        </TouchableOpacity>
    )
}

export default TextTab

const styles = StyleSheet.create({
    card: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        // fontFamily: 'Circular Std',
        color: colorPalette.Gray,
        marginRight: 15,
    },
    selectedCard: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        // fontFamily: 'Circular Std',
        color: colorPalette.Blue,
        borderBottomColor: colorPalette.Blue,
        borderBottomWidth: 2,
        marginRight: 15,
    }
})
