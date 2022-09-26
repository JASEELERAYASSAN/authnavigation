import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, ForgotPassword, Register } from '../screens'
import { ROUTES } from '../constants'
import DrawerNavigator from './DrawerNavigator'

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    console.log(Stack)
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}
        options={({route})=> ({
            headerTintColor: 'white',    
        headerStyle: {
            backgroundColor: '#7d5fff',
        },
        title: route.params.userId
      })} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})
export default AuthNavigator

