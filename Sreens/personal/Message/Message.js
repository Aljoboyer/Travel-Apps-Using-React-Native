import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Message = () => {
  return (
    <ScrollView>
        <TouchableOpacity style={styles.messageContainer}>
            <Image style={styles.msgimg} source={{uri: 'https://omeglesites.net/wp-content/uploads/2016/02/omegle-russia-300x254.jpg'}}/>
            <View style={styles.textcontainer}>
                <Text style={styles.username}>Anatony Keily</Text>
                <Text style={styles.sms}>Lorem ipsum dolor...</Text>
            </View>
            <Text style={styles.dates}>2 January 2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageContainer}>
            <Image style={styles.msgimg} source={{uri: 'https://imagevault.sca.com/publishedmedia/cr9iarslbmdrxax333tl/Jerry_Larsson_278.jpg'}}/>
            <View style={styles.textcontainer}>
                <Text style={styles.username}>Jack Daniel </Text>
                <Text style={styles.sms}> velit numquam quae...</Text>
            </View>
            <Text style={styles.dates}>2 December 2021</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.messageContainer}>
            <Image style={styles.msgimg} source={{uri: 'https://i1.au.reastatic.net/300x400/050d7b0cb7399f8c2245badf15769a5a0e94a6c40c90a62bc09fd7f96b1dba6f/main.jpg'}}/>
            <View style={styles.textcontainer}>
                <Text style={styles.username}>angelina seily</Text>
                <Text style={styles.sms}>ipsa laudantium ...</Text>
            </View>
            <Text style={styles.dates}>15 November 2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageContainer}>
            <Image style={styles.msgimg} source={{uri: 'https://i.pinimg.com/236x/06/70/23/06702375c6540973c62994a1fcf2e2b2.jpg'}}/>
            <View style={styles.textcontainer}>
                <Text style={styles.username}>John Day</Text>
                <Text style={styles.sms}>Lorem ipsum dolor...</Text>
            </View>
            <Text style={styles.dates}>2 January 2022</Text>
        </TouchableOpacity> 
    </ScrollView>
  );
}

export default Message;

const styles = StyleSheet.create({
  messageContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  msgimg:{
    height: 90,
    width: 90,
    borderRadius: 20,
    marginVertical: 15
  },

  username:{
    fontSize: 20,
    fontWeight: 'bold',

  },
  sms:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray'
  },
  dates:{
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginVertical: 30
  },
  textcontainer:{
    marginVertical: 20
  }
})