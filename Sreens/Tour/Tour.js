import React from 'react';
import { View, Text , StyleSheet,Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tour = () => {
  return (
    <ScrollView>
        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://i.insider.com/4b4396360000000000253b06?width=600&format=jpeg&auto=webp'}} 
          />
          <Text style={styles.tourtitle}>Germany , Luxembourg </Text>
          <View style={styles.tourfooter}>
            <View style={styles.rating}>
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="staro"size={20} color="#ffbf00" />
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ 5550</Text>
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://www.comeonitaly.com/wp-content/uploads/2020/02/venezia_cosa_vedere_con_i_bambini-1000x640-1-400x300.jpg'}} 
          />
          <Text style={styles.tourtitle}>Italy , Venice</Text>
          <View style={styles.tourfooter}>
            <View style={styles.rating}>
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ 7550</Text>
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://www.mingtiandi.com/wp-content/uploads/2018/05/the-spire-london-tower-400x300.jpg'}} 
          />
          <Text style={styles.tourtitle}>Germany , Luxembourg </Text>
          <View style={styles.tourfooter}>
            <View style={styles.rating}>
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="staro"size={20} color="#ffbf00" />
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ 10550</Text>
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://globalvoices.org/wp-content/uploads/2021/06/Negombo2-400x300.jpg'}} 
          />
          <Text style={styles.tourtitle}>Germany , Luxembourg </Text>
          <View style={styles.tourfooter}>
            <View style={styles.rating}>
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="staro"size={20} color="#ffbf00" />
            <AntDesign name="staro"size={20} color="#ffbf00" />
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ 4550</Text>
        </View>

        <View style={styles.tourcontainer}>
          <Image
          style={styles.images}
          source={{uri: 'https://static.toiimg.com/thumb/81314542.cms?resizemode=4&width=400'}} 
          />
          <Text style={styles.tourtitle}>Germany , Luxembourg </Text>
          <View style={styles.tourfooter}>
            <View style={styles.rating}>
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            <AntDesign name="star" size={20} color="#ffbf00" />
            </View>
            <TouchableOpacity style={styles.bookbtn}>
              <Text style={styles.booktext}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$ 15550</Text>
        </View>
    </ScrollView>
  );
}

export default Tour;
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
  price:{backgroundColor: '#cc0000', color: 'white', fontSize: 17, fontWeight: 'bold', width: 100, textAlign: 'center',height: 45, padding: 10, marginLeft: 5, borderRadius: 10, position: 'absolute', top: 10}
})