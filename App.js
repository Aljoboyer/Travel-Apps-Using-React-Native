import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Login from './Sreens/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Sreens/Home/Home';
import Hotel from './Sreens/Hotel/Hotel';
import Tour from './Sreens/Tour/Tour';
import Car from './Sreens/Car/Car';
import Flight from './Sreens/Flight/Flight';
import Cruise from './Sreens/Cruise/Cruise';
import Events from './Sreens/Event/Event';
import Bus from './Sreens/Bus/Bus';
import RouteHome from './Sreens/Home/RouteHome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{
          header: () => null 
        }}  name='Login' component={Login}/>
        <Stack.Screen options={{
          header: () => null 
        }}  name='RouteHome' component={RouteHome}/> 
        <Stack.Screen name='Hotel' component={Hotel}/>
        <Stack.Screen name='Tour' component={Tour}/>
        <Stack.Screen name='Car' component={Car}/>
        <Stack.Screen 
         options={{
          title: 'Search Flight',
          headerTintColor: '#737373',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 60
          },
        }}
        name='Flight' component={Flight}/>
        <Stack.Screen name='Cruise' component={Cruise}/>
        <Stack.Screen name='Events' component={Events}/>
        <Stack.Screen name='Bus' component={Bus}/>
    </Stack.Navigator> 
    </NavigationContainer>
  ); 
}


