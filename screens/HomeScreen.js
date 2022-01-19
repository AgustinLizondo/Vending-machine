import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import TextTab from '../components/TextTab';
import Vending from '../components/Vending';
import Transaction from '../components/Transaction';
import RechargeScreen from '../screens/RechargeScreen';

const vendingOptions = [
    'Mix',
    'Beverage',
    'Coffee'
]
const transactionsMade = [
    {
        type: 'Beverage',
        nOrder: '01',
        code: 'E27',
        date: '27 march, 15:27 AM',
        transaction: false,
        price: '1,00',
    },
    {
        type: 'Coffee',
        nOrder: '02',
        code: 'E07',
        date: '15 march, 16:32 AM',
        transaction: false,
        price: '1,00',
    },
    {
        type: 'Mix',
        nOrder: '03',
        code: 'E42',
        date: '12 march, 11:03 AM',
        transaction: false,
        price: '3,00',
    },
    {
        type: 'Recharge',
        nOrder: '04',
        code: 'Satispay',
        date: '10 march, 10:12 AM',
        transaction: true,
        price: '20,00',
    },
]

const HomeScreen = () => {

    const [activeTag, setActiveTag] = useState('Vending');
    const [isRecharging, setIsRecgharging] = useState(false);

    return (
        <View style={styles.container} >
            <Header profileImage={require('../assets/Rectangle-22.png')} name='Federica' />
            <View style={{ marginTop: 15 }}>
                <BalanceCard balance={'220,00'} onTap={() => setIsRecgharging(!isRecharging)} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 25, width: 395 }}>
                <TextTab
                    content={'Vending'}
                    selected={(activeTag === 'Vending')
                        ? true
                        : false}
                    onTap={() => setActiveTag('Vending')}
                />
                <TextTab
                    content={'Transactions'}
                    selected={(activeTag === 'Transactions')
                        ? true
                        : false}
                    onTap={() => setActiveTag('Transactions')}
                />
            </View>
            {activeTag === 'Vending'
                ? (
                    <View style={{ marginTop: 15 }}>
                        {vendingOptions.map((el, index) => (<Vending type={el} nOrder={'0' + (index + 1)} key={index} />))}
                    </View>
                )
                : (
                    <View style={{ marginTop: 15 }}>
                        {transactionsMade.map((el, index) => (<Transaction type={el.type} nOrder={el.nOrder} code={el.code} date={el.date} transaction={el.transaction} price={el.price} key={index} />))}
                    </View>
                )
            }
            {isRecharging
                ? (
                    <RechargeScreen />
                )
                : null
            }
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
