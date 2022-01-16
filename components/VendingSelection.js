import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native'
import colorPalette from '../assets/Colors'

const windowWidth = Dimensions.get('window').width;
const VendingSelection = ({ type, nOrder, code, price }) => {

    let arrCode = [...code]

    let purchaseType;
    switch (type) {
        case 'Beverage':
            purchaseType = {
                type: 'Beverage',
                photo: require('../assets/icons/beverage.png')
            };
            break
        case 'Coffee':
            purchaseType = {
                type: 'Coffee',
                photo: require('../assets/icons/coffee.png')
            };
            break
        case 'Mix':
            purchaseType = {
                type: 'Snack, Beverage',
                photo: require('../assets/icons/mix.png')
            };
            break
        case 'Recharge':
            purchaseType = {
                type: 'Recharge',
                photo: require('../assets/icons/recharge.png')
            };
            break
    }

    return (
        <View style={styles.card}>
            <Image
                source={require('../assets/icons/chevron-bottom.png')}
                style={{ width: 24, height: 24, position: 'absolute', top: 28, left: 20 }}
            />
            <View style={styles.orderLogo}>
                <View style={styles.badge}>
                    <Image
                        source={purchaseType.photo}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                <View>
                    <Text style={styles.mainInfo}>#{nOrder} - {type}</Text>
                    <Text style={styles.purchaseType}>{purchaseType.type}</Text>
                </View>
            </View>
            <View style={styles.inputCard}>
                <Text style={styles.selection}>SELECTION</Text>
                <View style={styles.subInputCard}>
                    <TextInput
                        style={styles.textInput}
                        value={arrCode[0]}
                    //Add useState to update price
                    />
                    <TextInput
                        style={styles.textInput}
                        value={arrCode[1]}
                    //Add useState to update price
                    />
                    <TextInput
                        style={styles.textInput}
                        value={arrCode[2]}
                    //Add useState to update price
                    />
                </View>
                <Text style={styles.price}>{price} €</Text>
            </View>
        </View>
    )
}

export default VendingSelection

const styles = StyleSheet.create({
    card: {
        backgroundColor: colorPalette.Blue,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        width: '100%',
        height: 246,
    },
    badge: {
        width: 32,
        height: 32,
        backgroundColor: colorPalette.Shadow,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16
    },
    orderLogo: {
        position: 'absolute',
        left: 64,
        top: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    purchaseType: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
        // fontFamily: 'Circular Std',
        color: colorPalette.Gray
    },
    mainInfo: {
        fontSize: 17,
        lineHeight: 22,
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        color: colorPalette.White,
    },
    textInput: {
        width: 41,
        height: 62,
        fontSize: 48,
        lineHeight: 80,
        textAlign: 'center',
        color: colorPalette.White,
        borderBottomWidth: 2,
        borderBottomColor: colorPalette.White,
        marginHorizontal: 4,
        // fontFamily: 'Circular Std',
    },
    selection: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '700',
        color: colorPalette.White
    },
    inputCard: {
        width: 138,
        height: 128,
        top: 90,
        left: (windowWidth - 138) / 2,
        alignItems: 'center'
    },
    subInputCard: {
        width: 137,
        height: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    price: {
        position: 'absolute',
        fontSize: 22,
        lineHeight: 28,
        // fontFamily: 'Circular Std',
        fontWeight: '400',
        textAlign: 'center',
        bottom: 8,
        color: colorPalette.White,
    }
})
