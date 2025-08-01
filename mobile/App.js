import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PapelariaScreen from './screens/PapelariaScreen';
import InformaticaScreen from './screens/InformaticaScreen';
import EpiPaeScreen from './screens/EpiPaeScreen';
import RelatorioScreen from './screens/RelatorioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PapelariaScreen" component={PapelariaScreen} />
        <Stack.Screen name="InformaticaScreen" component={InformaticaScreen} />
        <Stack.Screen name="EpiPaeScreen" component={EpiPaeScreen} />
        <Stack.Screen name="RelatorioScreen" component={RelatorioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
