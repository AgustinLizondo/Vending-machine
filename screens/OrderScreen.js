import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colorPalette from '../assets/Colors';
import ActionsCard from '../components/ActionsCard';

const OrderScreen = ({ navigation }) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ position: 'absolute', zIndex: 1000, width: 128, height: 128 }}>
                <Image
                    source={require('../assets/icons/chevron-left.png')}
                    style={{ width: 32, height: 32, top: 16, left: 16 }}
                />
            </TouchableOpacity>
            <View style={styles.subCard}>
                <Text style={styles.selection}>SELECTION</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput style={styles.input} defaultValue={'E'} editable={false} keyboardType='numeric' maxLength={1} />
                    <TextInput style={styles.input} defaultValue={'4'} keyboardType='numeric' autoFocus maxLength={1} />
                    <TextInput style={styles.input} defaultValue={'1'} keyboardType='numeric' maxLength={1} />
                </View>
            </View>
            <ActionsCard />
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        top: 36
    },
    subCard: {
        width: '100%',
        height: 246,
        backgroundColor: colorPalette.Blue,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 41,
        height: 62,
        fontSize: 48,
        lineHeight: 80,
        color: colorPalette.White,
        // fontFamily: 'Circular Std',
        borderBottomColor: colorPalette.White,
        borderBottomWidth: 2,
        marginHorizontal: 4,
        textAlign: 'center'
    },
    selection: {
        fontSize: 13,
        lineHeight: 18,
        // fontFamily: 'Circular Std',
        fontWeight: '700',
        color: colorPalette.White
    }
});
