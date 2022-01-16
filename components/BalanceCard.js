import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors';

const BalanceCard = ({ balance }) => {
    return (
        <View style={styles.card}>
            <View style={{
                position: 'absolute',
                top: 20,
                bottom: 20,
                left: 20,
            }}>
                <Text style={styles.available}>AVAILABLE</Text>
                <Text style={styles.balance}>{balance} €</Text>
            </View>
            <TouchableOpacity style={styles.subCard}>
                <Text style={styles.recharge}>Recharge</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 395,
        height: 100,
        borderRadius: 8,
        backgroundColor: colorPalette.Blue,
        flexDirection: 'row',
    },
    available: {
        position: 'absolute',
        top: 1,
        fontSize: 13,
        lineHeight: 18,
        fontWeight: "700",
        // fontFamily: 'Circular Std',
        color: colorPalette.White,
        opacity: .72,
    },
    balance: {
        position: 'absolute',
        top: 19,
        width: 117,
        height: 41,
        fontSize: 34,
        lineHeight: 41,
        fontWeight: "700",
        // fontFamily: 'Circular Std',
        color: colorPalette.White,
    },
    subCard: {
        backgroundColor: colorPalette.White,
        width: 88,
        height: 32,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 34,
        bottom: 34,
        right: 20,
    },
    recharge: {
        borderColor: colorPalette.Gray,
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "400",
        textAlign: 'center',
        // fontFamily: 'Circular Std',
        color: colorPalette.Blue
    }
})

export default BalanceCard
