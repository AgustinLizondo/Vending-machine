import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AmountCard from './components/AmountCard';
import BalanceCard from './components/BalanceCard';
import BasicButton from './components/BasicButton';
import Header from './components/Header';
import PriceButton from './components/PriceButton';
import Tag from './components/Tag';
import TextTab from './components/TextTab';

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
