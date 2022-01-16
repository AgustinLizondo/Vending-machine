import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}

{/* 
<AmountCard amount={'1'} />
<BasicButton content={'Buy'} />
<PriceButton price={'5'} />
<Tag value={'E12'} selected={true} />
<TextTab content={'Text'} selected={true} />
<Transaction type={'Coffee'} nOrder={'01'} code={'E41'} date={'23 march, 10:12 AM'} transaction={false} price={'1,00'} />
<Vending type={'Mix'} nOrder={'01'} />
<VendingSelection type={'Coffee'} nOrder={'01'} code={'E41'} price={'1,20'}/>
<ActionsCard /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 24,
  },
});
