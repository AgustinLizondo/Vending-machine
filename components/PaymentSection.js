import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors'

const PaymentSection = () => {
    //This is gona be better done
    //Including HalfButton and WholeButton components.
    //Card images and payment methods are not shown.
    return (
        <View style={styles.card}>
            <Text style={styles.recharge}>Recharge with</Text>
            <View style={styles.paymentMethod}>
                <View style={{ flexDirection: 'row', width: 258, height: 54, marginBottom: 9 }}>
                    <TouchableOpacity style={styles.halfButton}>
                        {/* <Image
                            source={require('../assets/satispay.png')}
                            style={{ width: 72, height: 24 }}
                        /> */}
                        <Text>Satispay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.halfButton}>
                        {/* <Image
                            source={require('../assets/Group.png')}
                            style={{ width: 65, height: 16 }}
                        /> */}
                        <Text>Paypal</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.wholeButton}>
                    {/* <Image
                            source={require('../assets/Group.png')}
                            style={{ width: 65, height: 16 }}
                        /> */}
                    <Text>Apple Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wholeButton}>
                    {/* <Image
                            source={require('../assets/Group.png')}
                            style={{ width: 65, height: 16 }}
                        /> */}
                    <Text>Amex - Visa - MasterCard - Maestro</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
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
        color: colorPalette.Black,
    },
    paymentMethod: {
        width: 257,
        height: 174,
        top: 71.5,
        left: -4.5,
    },
    halfButton: {
        width: 124.5,
        height: 54,
        backgroundColor: colorPalette.Gray,
        marginHorizontal: 4.5,
        marginVertical: 4.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wholeButton: {
        width: 258,
        height: 54,
        backgroundColor: colorPalette.Gray,
        marginHorizontal: 4.5,
        marginVertical: 4.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
