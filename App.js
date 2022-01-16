import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AmountCard from './components/AmountCard';
import BalanceCard from './components/BalanceCard';
import BasicButton from './components/BasicButton';
import Header from './components/Header';
import PriceButton from './components/PriceButton';
import Tag from './components/Tag';
import TextTab from './components/TextTab';
import Transaction from './components/Transaction';
import Vending from './components/Vending';
import VendingSelection from './components/VendingSelection';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BalanceCard balance={'15,00'}/>
      <AmountCard amount={'1'} />
      <BasicButton content={'Buy'} />
      <PriceButton price={'5'} />
      <Header profileImage={require('./assets/Rectangle-22.png')} name={'Federica'} />
      <Tag value={'E12'} selected={true} />
      <TextTab content={'Text'} selected={true} />
      <Transaction type={'Coffee'} nOrder={'01'} code={'E41'} date={'23 march, 10:12 AM'} transaction={false} price={'1,00'} />
      <Vending type={'Mix'} nOrder={'01'} />
      <VendingSelection type={'Coffee'} nOrder={'01'} code={'E41'} price={'1,20'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
