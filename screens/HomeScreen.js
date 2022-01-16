import React from 'react'
import { View, StyleSheet } from 'react-native'
import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import TextTab from '../components/TextTab';
import Vending from '../components/Vending';

const vendingOptions = [
    'Mix',
    'Beverage',
    'Coffee'
  ]

const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <Header profileImage={require('../assets/Rectangle-22.png')} name='Federica' />
            <View style={{ marginTop: 15 }}>
                <BalanceCard balance={'220,00'} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 25, width: 395 }}>
                <TextTab content={'Vending'} selected />
                <TextTab content={'Transactions'} />
            </View>
            <View style={{ marginTop: 15 }}>
                {vendingOptions.map((el, index) => (<Vending type={el} nOrder={index} key={index} />))}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 24,
    },
});

export default HomeScreen
