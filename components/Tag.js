import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors';

const Tag = ({ value, selected }) => {
    return (
        <LinearGradient
            colors={selected ? ['#6B73FF', '#2B35FF'] : [colorPalette.Gray, colorPalette.Gray]}
            style={selected ? styles.selectedCard : styles.card}
        >
            <Text style={styles.content}>{value}</Text>
        </LinearGradient>
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
        marginHorizontal: 4,
    },
    content: {
        // fontFamily: 'Circular Std'
    }
})

export default Tag