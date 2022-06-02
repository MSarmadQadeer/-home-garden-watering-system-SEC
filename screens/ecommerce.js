import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Searchbar from './searchBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const productData = [
  {
    itemId: 1,
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&w=1000&q=80',
    price: '$12.99',
    name: 'snake plant',
  },
  {
    itemId: 2,
    price: '$12.99',
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&w=1000&q=80',
    name: 'snake plant',
  },
  {
    itemId: 3,
    price: '$12.99',
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&w=1000&q=80',
    name: 'snake plant',
  },
];

function Ecommerce({ navigation }) {
  const [value, setValue] = useState();

  function updateSearch(value) {
    //do your search logic or anything
    console.log(value);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e1e5ea' }}>
      <Searchbar
        value={value}
        updateSearch={updateSearch}
        style={{ marginTop: '8%' }}
      />

      <TouchableOpacity style={styles.threeLine}>
        <Image
          style={styles.icon}
          source={require('../assets/images/threeLine.jpg')}
        />
      </TouchableOpacity>

      <ScrollView style={{ flex: 1, marginTop: 30, backgroundColor: '#e1e5ea' }}>
        <Text style={styles.title}>Found Results</Text>
        {productData.map(ele => {
          return (
            <View key={ele.itemId} style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Pdetails', ele)}>
                <Image
                  style={{
                    width: '100%',
                    height: '75%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    shadowColor: '#663399',
                  }}
                  source={{
                    uri: ele.url,
                  }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.buttonText}>{ele.name}</Text>
                    <Text style={styles.buttonText}>{ele.price}</Text>
                  </View>
                  <View style={{ marginVertical: 10, marginLeft: 10 }}>
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        source={require('../assets/images/like.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Pdetails', ele)}>
                <Image
                  style={{
                    width: '100%',
                    height: '75%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={{
                    uri: ele.url,
                  }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.buttonText}>{ele.name}</Text>
                    <Text style={styles.buttonText}>{ele.price}</Text>
                  </View>
                  <View style={{ marginVertical: 10, marginLeft: 10 }}>
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        source={require('../assets/images/like.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Ecommerce;

const styles = StyleSheet.create({
  threeLine: {
    left: '83%',
    marginTop: '8%',
    width: 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
  },

  icon: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'red',
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 150,
  },

  buttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    width: width / 2 - 20,
    marginHorizontal: 10,
    height: 270,
    borderRadius: 10,
    // left: '5%',
    marginTop: '10%',
    // marginHorizontal: 10,
    shadowOpacity: 3,
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
