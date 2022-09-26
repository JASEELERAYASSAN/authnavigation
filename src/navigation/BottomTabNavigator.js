import React from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTES } from '../constants'
import { Home, Categories, Notifications, Account, Cart } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                // tabBarShowLabel: false,
                // tabBarStyle: styles.tabBarStyle,
                tabBarInactiveTintColor: '#444',
                tabBarActiveTintColor: '#7d5fff',
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === ROUTES.HOME_TAB) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === ROUTES.CATEGORIES) {
                        iconName = focused ? 'apps-sharp' : 'apps-outline';
                    } else if (route.name === ROUTES.ACCOUNT) {
                        iconName = focused ? 'person-sharp' : 'person-outline';
                    } else if (route.name === ROUTES.NOTIFICATIONS) {
                        iconName = focused
                            ? 'notifications-sharp'
                            : 'notifications-outline';
                    } else if (route.name === ROUTES.CART) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }

                    return <Icon name={iconName} size={22} color={color} />;
                },
            }
            )}>
            <Tab.Screen name={ROUTES.HOME_TAB} component={Home}
                options={{
                    title: 'Home',
                }} />
            <Tab.Screen name={ROUTES.CATEGORIES} component={Categories}/>
            <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
            <Tab.Screen name={ROUTES.ACCOUNT} component={Account} 
            options={{
                headerShown: true,
                headerRight: ({}) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                            <Icon
                                name={Platform.OS === 'android' ? 'menu' : 'menu-outline'}
                                size={30} 
                                color={'#444'}
                                style={{marginRight:10}} />
                        </TouchableOpacity>
                    )
                }
            }} />
            <Tab.Screen name={ROUTES.CART} component={Cart} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        // position: 'absolute',
        // backgroundColor: COLORS.tranparent,
        // borderTopWidth: 0,
        // bottom: 15,
        // right: 10,
        // left: 10,
        // height: 60,
    }
})