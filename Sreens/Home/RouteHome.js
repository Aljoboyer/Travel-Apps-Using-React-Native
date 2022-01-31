import React from 'react';
import { View, Text } from 'react-native';
import Home from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, Entypo, MaterialIcons , Ionicons, Feather} from '@expo/vector-icons'; 
import Booking from '../personal/Booking/Booking';
import Message from '../personal/Message/Message';
import Account from '../personal/Account/Account';

const Tab = createBottomTabNavigator();

const RouteHome = () => {
  return (
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {

            if(route.name === 'Home')
            {
                size = focused ? 34 : 24;
                color = focused ? '#000066' : 'gray' ;
                return(
                <FontAwesome name="home" size={size} color={color} />
                )
            }
            else if(route.name === 'Booking')
            {
                size = focused ? 34 : 24;
                color = focused ? '#000066' : 'gray';
                return(
                    <MaterialIcons name="book-online" size={size} color={color} />
                    )
            }
            else if(route.name === 'Message')
            {
                size = focused ? 30 : 24;
                color = focused ? '#000066' : 'gray' ;
                return(
                    <Entypo name="message" size={size} color={color} />
                    )
            }
            else if(route.name === 'Account')
            {
                size = focused ? 30 : 24;
                color = focused ? '#000066' : 'gray' ;
                return(
                <MaterialIcons name="account-circle" size={size} color={color} />
                )
            }
    }
    })}
    >
    <Tab.Screen  options={{header: () => null}} name="Home" component={Home}/>
    <Tab.Screen   name="Booking" component={Booking}/>
    <Tab.Screen   name="Message" component={Message}/>
    <Tab.Screen   name="Account" component={Account}/>
        </Tab.Navigator>
        );
}

export default RouteHome;
