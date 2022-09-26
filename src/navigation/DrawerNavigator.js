import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ROUTES } from '../constants'
import { Help, Orders, Logout, Wallet, Wishlist } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#7d5fff',
            drawerActiveTintColor: 'white',
            drawerLabelStyle: {
                marginLeft: -20,
            }
        }}>
            <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator}
                options={{
                    headerShown: false,
                    title: 'Home',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='home' size={18} color={color} />
                    )
                }} />
            <Drawer.Screen name={ROUTES.WALLET} component={Wallet}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='wallet' size={18} color={color} />
                    )
                }} />
            <Drawer.Screen name={ROUTES.ORDERS} component={Orders}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='checkbox' size={18} color={color} />
                    )
                }} />
            <Drawer.Screen name={ROUTES.WISHLIST} component={Wishlist}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='heart' size={18} color={color} />
                    )
                }} />
            <Drawer.Screen name={ROUTES.HELP} component={Help}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='help-circle' size={18} color={color} />
                    )
                }} />
            <Drawer.Screen name={ROUTES.LOGOUT} component={Logout}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name='log-out' size={18} color={color} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

const styles= StyleSheet.create({})
export default DrawerNavigator
