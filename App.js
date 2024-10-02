import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import TabNavigator from './src/navigation/BottomTab';
import LoginScreen from './src/screens/LoginScreen';
import SigninScreen from './src/screens/SigninScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
