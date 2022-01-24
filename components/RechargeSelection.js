import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors'
import PriceButton from './PriceButton'

const RechargeSelection = ({ onTap }) => {

    const [selectedValue, setSelectedValue] = useState(10);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ width: 128, height: 32, position: 'absolute', alignItems: 'center' }}
                onPress={onTap}
            >
                <Image
                    source={require('../assets/icons/Rectangle16.png')}
                    style={{ width: 48, height: 4, position: 'absolute', top: 12 }}
                />
            </TouchableOpacity>
            <View style={styles.availableCard}>
                <Text style={styles.available}>AVAILABLE</Text>
                <Text style={styles.amount}>{'15,00'} €</Text>
            </View>
            <View style={styles.amountCard}>
                <Text style={styles.selection}>Select import</Text>
                <View style={styles.buttonCointainer}>
                    <PriceButton price={5} selectedValue={selectedValue} onTap={() => setSelectedValue(5)} />
                    <PriceButton price={10} selectedValue={selectedValue} onTap={() => setSelectedValue(10)} />
                    <PriceButton price={20} selectedValue={selectedValue} onTap={() => setSelectedValue(20)} />
                </View>
            </View>
        </View>
    )
}

export default RechargeSelection

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 297,
        alignItems: 'center',
        width: '100%',
        height: 297,
        backgroundColor: colorPalette.Blue,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
    },
    availableCard: {
        width: '100%',
        top: 56,
        height: 59,
        justifyContent: 'center',
        alignItems: 'center',
    },
    available: {
        fontSize: 13,
        lineHeight: 18,
        // fontFamily: 'Circular Std',
        fontWeight: '700',
        color: colorPalette.White,
        opacity: .72
    },
    amount: {
        fontSize: 34,
        lineHeight: 41,
        // fontFamily: 'Circular Std',
        fontWeight: '700',
        color: colorPalette.White,
    },
    amountCard: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 139,
    },
    selection: {
        color: colorPalette.White,
        // fontFamily: 'Circular Std',
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 15,
    },
    buttonCointainer: {
        flexDirection: 'row',
    }
})
