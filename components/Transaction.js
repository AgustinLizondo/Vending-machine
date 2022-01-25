import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import colorPalette from '../assets/Colors'

const Transaction = ({ type, nOrder, code, date, transaction, price }) => {
    let typePhoto;
    let typeTransaction
    switch (type) {
        case 'Beverage':
            typePhoto = {
                type: 'Beverage',
                photo: require('../assets/icons/beverage.png')
            };
            break
        case 'Coffee':
            typePhoto = {
                type: 'Coffee',
                photo: require('../assets/icons/coffee.png')
            };
            break
        case 'Mix':
            typePhoto = {
                type: 'Snacks, Beverage',
                photo: require('../assets/icons/mix.png')
            };
            break
        case 'Recharge':
            typePhoto = {
                type: 'Recharge',
                photo: require('../assets/icons/recharge.png')
            };
            break
    }
    if (transaction) {
        typeTransaction = require('../assets/icons/plus.png');
    } else {
        typeTransaction = require('../assets/icons/minus.png');
    }

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.badge}>
                <Image
                    source={typePhoto.photo}
                    style={{ width: 20, height: 20 }}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.info}>#{nOrder} - {typePhoto.type} - {code} </Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.transaction}>
                <Image
                    source={typeTransaction}
                    style={{ width: 12, height: 12 }}
                />
                <Text style={styles.import}>{price} <Text style={{ color: colorPalette.Gray }}>€</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

export default Transaction

const styles = StyleSheet.create({
    card: {
        width: 375,
        height: 64,
        backgroundColor: colorPalette.White,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colorPalette.Gray,
    },
    info: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400',
        // fontFamily: 'Circular Std',
        color: colorPalette.Black
    },
    date: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '400',
        // fontFamily: 'Circular Std',
        color: colorPalette.Gray
    },
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        top: 21,
    },
    import: {
        fontSize: 17,
        lineHeight: 22,
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        textAlign: 'right',
        marginLeft: 8
    },
    badge: {
        width: 32,
        height: 32,
        backgroundColor: colorPalette.Shadow,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16
    }
})
