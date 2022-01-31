import React from 'react';
import {FlatList, View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native';

const HotelData = () => {
    const promostdata =[
        {id: '1id', title: 'Raymond Hotel Canada', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXlwIvANQnxgA5E8Qgln6LSPDB5l6EjyDLA&usqp=CAU'},
        {id: '5id', title: 'Angelo Marmig London', img: 'https://i.pinimg.com/736x/21/40/79/214079d073f621055e23e82c130bcd53--san-miguel-mexico-mexico-travel.jpg'},
        {id: '6id', title: 'Jikaras Srilanka', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaj4zyhcqw9MUL8hghd-GTGGBCHg84MtfEg&usqp=CAU'},
        {id: '2id', title: 'Yourekaa Maldevs', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5042OjWiWPXl8nN-sj-oO9vaHbdHsheoqKA&usqp=CAU'},
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
        <Text style={styles.maintitle}>Promos Today</Text>
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

export default HotelData;
const styles = StyleSheet.create({
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
    hotelcontainer:{
        marginTop: 160
    },
    hotelcard:{
        marginHorizontal: 15
    },
    bookbtn:{
        backgroundColor: 'white',
        width: 80,
        height: 50,
        position: 'absolute',
        top: 70,
        left: 40,
        borderRadius: 10
    },
    booktext:{
        fontWeight: 'bold',
        color: '#000066',
        textAlign: 'center',
        marginVertical: 15
    },
    maintitle:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000066',
        marginVertical: 10,
        marginLeft: 20
    }
})