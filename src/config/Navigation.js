import React from "react";
import {Login,Signup,ResetPass,NewPass} from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ title: 'Login' }}  component={Login} />
          <Stack.Screen name="Signup" options={{ title: 'Signup' }} component={Signup} />
          <Stack.Screen name="NewPass" component={NewPass} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  