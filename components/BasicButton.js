import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colorPalette from '../assets/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const BasicButton = ({ content }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <LinearGradient

                style={styles.card}
                colors={['#6B73FF', '#2B35FF']}
            >
                <Text style={styles.content}>{content}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
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
