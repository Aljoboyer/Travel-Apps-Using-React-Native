import React from 'react';
import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Car = () => { 
  return (
    <ScrollView>
        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2LJINHM0TEU96EvpVZLR6smDwIBVKFwz3w&usqp=CAU'}} 
          />
          <Text style={styles.tourtitle}>Chevorlet Camaro , Luxery </Text>
          <View style={styles.tourfooter}>
            <View>
            <Text style={styles.price}>$650</Text>
            <Text style={styles.perday}>Per Day</Text>
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://i.pinimg.com/474x/b8/f9/c9/b8f9c97b2f703f469dcc0fbd06e221be.jpg'}} 
          />
          <Text style={styles.tourtitle}>Ford Focus, Medium</Text>
          <View style={styles.tourfooter}>
            <View>
            <Text style={styles.price}>$450</Text>
            <Text style={styles.perday}>Per Day</Text>
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://static.toiimg.com/thumb/msid-64612598,width-400,resizemode-4/64612598.jpg'}} 
          />
          <Text style={styles.tourtitle}>BMW , Luxery </Text>
          <View style={styles.tourfooter}>
            <View>
            <Text style={styles.price}>$750</Text>
            <Text style={styles.perday}>Per Day</Text>
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://static.toiimg.com/thumb/msid-55222775,width-400,resizemode-4/55222775.jpg'}} 
          />
          <Text style={styles.tourtitle}>ToyTa, Medium </Text>
          <View style={styles.tourfooter}>
            <View>
            <Text style={styles.price}>$350</Text>
            <Text style={styles.perday}>Per Day</Text>
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          
        </View>

    </ScrollView>
  );
}

export default Car;
const styles = StyleSheet.create({
  tourcontainer:{
    marginBottom: 30
  },
  images:{
    height: 200
  },
  tourtitle:{fontSize: 22, fontWeight: 'bold', marginLeft: 5, color: '#333333'},
  tourfooter:{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5},
  bookbtn:{width: 120, height: 40, borderColor: '#cc0000', borderWidth: 1, borderRadius: 25},
  booktext:{fontSize: 16, fontWeight: 'bold', color: '#cc0000', textAlign: 'center', marginTop: 7},
  rating:{display: 'flex', flexDirection: 'row', marginTop: 17},
  price:{color: '#cc0000', fontSize: 20, fontWeight: 'bold', marginLeft: 5},
  perday:{color: '#808080', fontSize: 16, fontWeight: 'bold', marginLeft: 5}
})