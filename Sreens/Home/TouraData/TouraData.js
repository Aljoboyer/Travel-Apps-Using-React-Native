import React from 'react';
import {FlatList, View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native';

const TouraData = () => {
    const promostdata =[
        {id: '1id', title: 'Maldives Tour', img: 'https://static.toiimg.com/thumb/85799855.cms?resizemode=4&width=400'},
        {id: '5id', title: 'Turkey Tour', img: 'https://t4.ftcdn.net/jpg/01/43/21/31/360_F_143213121_lTllsDnPtkK54kXxghEnQpFkaCaNOiaz.jpg'},
        {id: '6id', title: 'Tour Japan', img: 'https://i.pinimg.com/474x/2c/bd/61/2cbd61678ca3cbc3cb412494a92d4046.jpg'},
        {id: '2id', title: 'Greece Tour', img: 'https://cdn3.photostockeditor.com/t/0808/travel-woman-standing-on-concrete-surface-looking-forward-on-sea-greece-greece-image.jpg'},
    ]
    const renderItem = ({ item }) => (
        <View style={styles.hotelcard}>
            <Image
            style={styles.hotelimg}
            source={{
            uri:`${item.img}`,
            }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.bookbtn}><Text style={styles.booktext}>Book Now</Text></TouchableOpacity>
      </View>
      );
  return (
    <View style={styles.hotelcontainer}>
        <Text style={styles.maintitle}>Book Your Favorite Tour</Text>
        <FlatList
        data={promostdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}

export default TouraData;
const styles = StyleSheet.create({
    hotelcontainer:{
        marginTop: 20
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#cc0000',
    },
    hotelimg:{
        height: 200,
        width: 170,
        borderRadius: 15
    },
    hotelcard:{
        marginHorizontal: 15
    },
    maintitle:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000066',
        marginVertical: 10,
        marginLeft: 20
    },
    bookbtn:{
        backgroundColor: '#000066',
        width: 80,
        height: 50,
        borderRadius: 10,
        marginVertical: 10
    },
    booktext:{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 15
    },
})