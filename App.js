import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Order'} component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
