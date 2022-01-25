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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 24,
  },
});
