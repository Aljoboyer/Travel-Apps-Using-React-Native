import React from 'react';
import { View, Text , StyleSheet, ScrollView} from 'react-native';

const Booking = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.bookmain}>
        <View style={styles.bookingcontainer}>
            <Text style={styles.bookingtitle}>Raymon Hotel</Text>
            <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
          />
            <View style={styles.detailscontainer}>
              <View>
                  <Text style={styles.checktitle}>Check In</Text>
                  <Text style={styles.checkdetails}>10 Jan 2022</Text>
              </View>
              <View>
                  <Text style={styles.outtitle}>Check Out</Text>
                  <Text style={styles.outdetails}>15 Jan 2022</Text>
              </View>
            </View>
        </View>
        <View style={styles.bookfooter}>
                <Text style={styles.footertext}>2 Days, 1 Night</Text> 
                <Text style={styles.footertext}>$500</Text>
        </View>

        <View style={styles.bookingcontainer}>
            <Text style={styles.bookingtitle}>Orchesta Hotel</Text>
            <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
          />
            <View style={styles.detailscontainer}>
              <View>
                  <Text style={styles.checktitle}>Check In</Text>
                  <Text style={styles.checkdetails}>15 Jan 2022</Text>
              </View>
              <View>
                  <Text style={styles.outtitle}>Check Out</Text>
                  <Text style={styles.outdetails}>25 Jan 2022</Text>
              </View>
            </View>
        </View>
        <View style={styles.bookfooter}>
                <Text style={styles.footertext}>5 Days, 1 Night</Text> 
                <Text style={styles.footertext}>$700</Text>
        </View>

        <View style={styles.bookingcontainer}>
            <Text style={styles.bookingtitle}>Orchid Hotel</Text>
            <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
          />
            <View style={styles.detailscontainer}>
              <View>
                  <Text style={styles.checktitle}>Check In</Text>
                  <Text style={styles.checkdetails}>15 Dec 2021</Text>
              </View>
              <View>
                  <Text style={styles.outtitle}>Check Out</Text>
                  <Text style={styles.outdetails}>7 Jan 2022</Text>
              </View>
            </View>
        </View>
        <View style={styles.bookfooter}>
                <Text style={styles.footertext}>15 Days, 1 Night</Text> 
                <Text style={styles.footertext}>$1500</Text>
        </View>

        <View style={styles.bookingcontainer}>
            <Text style={styles.bookingtitle}>Maroon Hotel</Text>
            <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}
          />
            <View style={styles.detailscontainer}>
              <View>
                  <Text style={styles.checktitle}>Check In</Text>
                  <Text style={styles.checkdetails}>25 Jan 2022</Text>
              </View>
              <View>
                  <Text style={styles.outtitle}>Check Out</Text>
                  <Text style={styles.outdetails}>7 Feb 2022</Text>
              </View>
            </View>
        </View>
        <View style={styles.bookfooter}>
                <Text style={styles.footertext}>13 Days, 1 Night</Text> 
                <Text style={styles.footertext}>$2000</Text>
        </View>
    </ScrollView>
  );
}

export default Booking;
const styles = StyleSheet.create({
  bookingcontainer:{
    backgroundColor: '#ff5c33',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bookingtitle:{ 
    color: 'white',
    fontSize: 24, 
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
  },
  detailscontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20
},
  checktitle:{color: 'white', fontSize:15,},
  checkdetails:{color: 'white', fontSize:19, fontWeight: 'bold'},
  outtitle:{color: 'white', fontSize:15},
  outdetails:{color: 'white', fontSize:19, fontWeight: 'bold'},
  bookfooter:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 30
  },
  footertext:{color: 'gray', fontSize: 16},
  bookmain:{
    marginVertical: 10,
    marginHorizontal: 10,
  }
})