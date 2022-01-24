import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors';

const Tag = ({ value, selected }) => {
    return (
        <TouchableOpacity style={selected ? styles.selectedCard : styles.card} >
            <Text style={styles.content}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 64,
        height: 32,
        borderRadius: 100,
        backgroundColor: colorPalette.White,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: colorPalette.Gray,
        marginHorizontal: 4,
    },
    selectedCard: {
        width: 64,
        height: 32,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: colorPalette.Gray,
        backgroundColor: colorPalette.Blue,
        marginHorizontal: 4,
    }
})

export default Tag