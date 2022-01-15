import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colorPalette from '../assets/Colors';


const BasicButton = ({content}) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.content}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colorPalette.Blue,
        width: 157,
        height: 54,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        // fontFamily: 'Circular Std',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 25,
        color: colorPalette.White,
    }
})

export default BasicButton
