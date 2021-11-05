import React from "react";
import {Login,Signup,ResetPass,NewPass,Quiz,Cam} from '../screens'
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
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Cam" component={Cam} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  