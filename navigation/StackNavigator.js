import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ListaComprasScreen from '../screens/ListaComprasScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import IntroScreen from '../screens/IntroScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ListaCompras" component={ListaComprasScreen} />
      <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
    </Stack.Navigator>
  );
}
