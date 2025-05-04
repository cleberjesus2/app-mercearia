import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ListaComprasScreen from './screens/ListaComprasScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import IntroScreen from './screens/IntroScreen'; // Certifique-se de que esse arquivo existe

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ListaComprasScreen" component={ListaComprasScreen} />
        <Stack.Screen name="CarrinhoScreen" component={CarrinhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
