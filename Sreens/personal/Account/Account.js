import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';

const Account = () => {
  return (
    <View>
      <View style={styles.imagecontainer}>
          <Image style={styles.images} source={require('../../../assets/image/bgtwo.png')}/>
          <View style={styles.namecontainer}>
              <Text style={styles.profilename}>Abdul Al Joboyer</Text>
              <Text style={styles.address}>From Banladesh</Text>
              <Text style={styles.username}>@alJoboyer</Text>
          </View>
          <TouchableOpacity style={styles.iconcontainer}><MaterialIcons style={styles.icons} name="arrow-forward-ios" size={30} color="gray" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Edit Profile</Text>
          <TouchableOpacity ><MaterialIcons style={styles.othericons} name="arrow-forward-ios" size={35} color="#cc0000" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Change Password</Text>
          <TouchableOpacity ><MaterialIcons style={styles.othericons} name="arrow-forward-ios" size={35} color="#cc0000" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Language</Text>
          <TouchableOpacity style={styles.languagecontainer}><Text style={styles.languagetext}>Language</Text><MaterialIcons style={styles.othericons} name="arrow-forward-ios" size={35} color="#cc0000" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Currency</Text>
          <TouchableOpacity style={styles.languagecontainer}><Text style={styles.languagetext}>USD</Text><MaterialIcons style={styles.othericons} name="arrow-forward-ios" size={35} color="#cc0000" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Cards</Text>
          <TouchableOpacity><MaterialIcons style={styles.othericons} name="arrow-forward-ios" size={35} color="#cc0000" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>Reminder</Text>
          <TouchableOpacity><Fontisto name="toggle-on" size={50} color="#248f24" /></TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
          <Text style={styles.fieldtext}>App Version</Text>
          <Text style={styles.languagetext}>1.4.0</Text>
      </View>
      <View>
          <TouchableOpacity style={styles.signoutbtn}><Text style={styles.signouttext}>SIGN-OUT</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;
const styles = StyleSheet.create({
  images:{
      height: 140,
      width: 140,
      borderRadius: 100,
      flex: 2
  },
  imagecontainer:{
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:  'center'
  },
  profilename:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#cc0000',
    marginLeft: 10
  },
  username:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10
  },
  namecontainer:{
    flex: 3,
    marginLeft: 10
  },
  iconcontainer:{
    flex: 1,
    
  },
  address:{
    color: '#000066',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10
  },
  icons:{
    marginLeft: 20
  },
  textcontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10
  },
  fieldtext:{
    fontSize: 20,
    color: '#666666',
    fontWeight: '600'
  },
  languagecontainer:{display: 'flex', flexDirection: 'row',},
  languagetext:{fontSize: 18, color: '#a6a6a6', marginTop: 5},
  signoutbtn:{borderColor: '#595959', borderWidth: 2, height: 50, width: 150, borderRadius: 10, marginTop: 15, marginHorizontal: 115},
  signouttext:{color: '#737373', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 8}
})
