import React from 'react';
import { View,Image, Text, StatusBar, StyleSheet,TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {FontAwesome, Fontisto, MaterialIcons , Ionicons, Feather} from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HotelData from './Hoteldata/Hoteldata';
import TouraData from './TouraData/TouraData';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <ScrollView>
        <StatusBar/>
        <Image
        style={styles.images}
        source={require('../../assets/image/homebanner.webp')} 
        />
 
        <View style={styles.homecontainer}>
          <Text style={styles.hometext}>What Are You Looking For  ?</Text>
          <View style={styles.iconsContainer}>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('Hotel')
            }} style={styles.iconsbutton}><Fontisto name="hotel" size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Tour')
            }} style={styles.iconsbutton}><MaterialIcons name="tour" size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Car')
            }} style={styles.iconsbutton}><FontAwesome name="car" size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Flight')
            }} style={styles.iconsbutton}><MaterialIcons name="flight" size={44} color="#cc0000" /></TouchableOpacity> 
            <TouchableOpacity onPress={() => {
              navigation.navigate('Cruise')
            }} style={styles.iconsbutton}><FontAwesome name="ship"size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Events')
            }} style={styles.iconsbutton}><MaterialIcons name="event-note" size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Bus')
            }} style={styles.iconsbutton}><Ionicons name="bus" size={44} color="#cc0000" /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Home')
            }} style={styles.iconsbutton}><Feather name="more-horizontal" size={44} color="#cc0000" /></TouchableOpacity>
          </View>
        </View>

       <HotelData></HotelData>
       <TouraData></TouraData>
    </ScrollView>
  );
}

export default Home;
const styles = StyleSheet.create({
  images:{
    height: 230,

  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  iconsbutton:{ 
    marginHorizontal: 15,
    marginVertical: 30,
  },
  homecontainer:{
    width: 350,
    height: 260,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    position: 'absolute',
    top: 120
  },
  hometext:{
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray'
  }
});
 