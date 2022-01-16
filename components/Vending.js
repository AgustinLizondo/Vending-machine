import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors';

const Vending = ({ type, nOrder }) => {
    let typePhoto;
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
                type: 'Snack, Beverage',
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

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.badge}>
                <Image
                    source={typePhoto.photo}
                    style={{ width: 20, height: 20}}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.info}>#{nOrder} - {type}</Text>
                <Text style={styles.description}>{typePhoto.type}</Text>
            </View>
            <View style={styles.selectCard}>
                <Text style={styles.selectText}>Select</Text>
                <Image
                    source={require('../assets/icons/arrow-right.png')}
                    style={{ width: 16, height: 16, opacity: .30 }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Vending

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
        // fontFamily: 'Circular Std'
        color: colorPalette.Black
    },
    description: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '400',
        // fontFamily: 'Circular Std',
        color: colorPalette.Gray
    },
    selectCard: {
        position: 'absolute',
        width: 51,
        height: 16,
        top: 24,
        right: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectText: {
        fontSize: 11,
        lineHeight: 13,
        fontWeight: '400',
        // fontFamily: 'Circular Std',
        marginRight: 4,
        color: colorPalette.Gray
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
