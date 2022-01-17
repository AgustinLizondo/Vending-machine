import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colorPalette from '../assets/Colors'

const PaymentSection = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.recharge}>Recharge with</Text>
            <View style={styles.paymentMethod}>
                <View style={{width: 124.5, height: 54, backgroundColor: colorPalette.Gray, marginHorizontal: 9, marginVertical: 9}}></View>
                <View style={{width: 124.5, height: 54, backgroundColor: colorPalette.Gray, marginHorizontal: 9, marginVertical: 9}}></View>
                <View style={{width: 258, height: 54, backgroundColor: colorPalette.Gray, marginVertical: 9}}></View>
                <View style={{width: 258, height: 54, backgroundColor: colorPalette.Gray, marginVertical: 9}}></View>
            </View>
        </View>
    )
}

export default PaymentSection

const styles = StyleSheet.create({
    card: {
        backgroundColor: colorPalette.White,
        width: '100%',
        height: 297,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },
    subCard: {
        position: 'absolute',
        bottom: 49,
        width: 258,
        height: 208,
    },
    recharge: {
        top: 41,
        fontSize: 15,
        lineHeight: 18,
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        color: colorPalette.Black
    },
    paymentMethod: {
        width: 257,
        height: 174,
    }
})
