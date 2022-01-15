import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colorPalette from '../assets/Colors';

const Tag = ({value, selected}) => {
    return (
        <View style={selected ? styles.selectedCard : styles.card}>
          <Text style={styles.content}>{value}</Text>
        </View>
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
    }
})

export default Tag