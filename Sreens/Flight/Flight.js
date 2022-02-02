import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Flight = () => {
  return (
    <View>
      <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.roundbtn}><Text style={styles.roundtext}>Round Trip</Text></TouchableOpacity>
          <TouchableOpacity style={styles.waybtn}><Text style={styles.waytext}>One Way</Text></TouchableOpacity>
      </View>
      <View style={styles.flightplace}>
          <View style={styles.fromcontainer}>
              <Text style={styles.fromtext}>From</Text>
              <Text style={styles.shortfrom}>SIN</Text>
              <Text style={styles.fullfrom}>Singapore</Text>
          </View>
          <View style={styles.iconcontainer}>
            <Ionicons style={styles.icons} name="airplane-sharp" size={40} color="#cc0000" />
          </View>
          <View style={styles.tocontainer}>
              <Text style={styles.totext}>To</Text>
              <Text style={styles.shortto}>SYD</Text>
              <Text style={styles.fullto}>Sydney</Text>
          </View>
      </View>
      <View style={styles.checkcontianer}>
          <View>
              <Text style={styles.checktitle}>Check Out</Text>
              <Text style={styles.dates}>Jan, 15 2022</Text>
          </View>
          <View>
              <Text style={styles.checktitle}>Check In</Text>
              <Text style={styles.dates}>Jan, 5 2022</Text>
          </View>
      </View>
      <View style={styles.classcontainer}>
          <Text style={styles.seatclass}>Seat Class</Text>
          <TextInput style={styles.classinput} placeholder='Write Your Class Name'/>
      </View>
      <View style={styles.memberContainer}>
          <View>
              <Text style={styles.rangetext}> GreaterThan</Text>
              <Text style={styles.rangetext}>12Years</Text>
              <Text style={styles.titles}>Adults</Text>
              <View style={styles.indbtn}>
                <AntDesign style={styles.indicons}  name="pluscircle" size={24} color="#cc0000" />
                <AntDesign style={styles.indicons} name="minuscircle" size={24} color="#cc0000" />
              </View>
              <Text style={styles.numbertext}>8</Text>
          </View>
          <View>
              <Text style={styles.rangetext}> LessThan</Text>
              <Text style={styles.rangetext}>12Years</Text>
              <Text style={styles.titles}>Children</Text>
              <View style={styles.indbtn}>
                <AntDesign style={styles.indicons}  name="pluscircle" size={24} color="#cc0000" />
                <AntDesign style={styles.indicons} name="minuscircle" size={24} color="#cc0000" />
              </View>
              <Text style={styles.numbertext}>4</Text>
          </View>
          <View>
              <Text style={styles.rangetext}>LessThan</Text> 
              <Text style={styles.rangetext}>2Years</Text>
              <Text style={styles.titles}>Infants</Text>
              <View style={styles.indbtn}>
                <AntDesign style={styles.indicons}  name="pluscircle" size={24} color="#cc0000" />
                <AntDesign style={styles.indicons} name="minuscircle" size={24} color="#cc0000" />
              </View>
              <Text style={styles.numbertext}>0</Text>
          </View>
      </View>
      <TouchableOpacity style={styles.searchbtn}>
        <Text style={styles.searchtext}>Search</Text>
      </TouchableOpacity>
    </View> 
  );
}

export default Flight;
const styles = StyleSheet.create({
  buttoncontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  roundbtn:{
    backgroundColor: '#cc0000',
    height: 50,
    width: 120,
    marginRight: 10,
    borderRadius: 30
  },
  roundtext:{
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  waybtn:{
    borderWidth: 1,
    borderColor: '#cc0000',
    height: 50,
    width: 120,
    marginRight: 10,
    borderRadius: 30
  },
  waytext:{
    color: '#cc0000',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  flightplace:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fromtext:{fontSize: 20, color: 'gray'},
  shortfrom:{fontSize: 30, color: '#cc0000', fontWeight: 'bold'},
  fullfrom:{fontSize: 20, fontWeight:'700'},
  totext:{fontSize: 20, color: 'gray'},
  shortto:{fontSize: 30, color: '#cc0000', fontWeight: 'bold'},
  fullto:{fontSize: 20, fontWeight:'700'},
  icons:{marginVertical: 23},
  checkcontianer:{ display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginVertical: 50
  },
  checktitle:{fontSize: 18, color: 'gray'},
  dates:{fontSize: 20, fontWeight: 'bold'},
  seatclass:{fontSize: 18, fontWeight: 'bold'},
  classinput:{borderBottomColor: 'gray', borderBottomWidth: 2, fontWeight: 'bold'},
  classcontainer:{marginHorizontal: 50},
  indbtn:{display: 'flex', flexDirection: 'row'},
  memberContainer:{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30,},
  titles:{fontSize: 20, fontWeight: 'bold', color: '#cc0000', marginVertical: 5},
  rangetext:{fontSize: 14,color: 'gray'},
  numbertext:{fontSize: 20,fontWeight: 'bold', marginHorizontal: 30},
  indicons:{ marginHorizontal: 5,},
  searchbtn:{backgroundColor: '#cc0000', width: 250, height: 60, marginHorizontal: 70, borderRadius: 15},
  searchtext:{fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', marginVertical: 13}
})