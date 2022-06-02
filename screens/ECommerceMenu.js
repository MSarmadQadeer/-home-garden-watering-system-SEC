import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const CustomButton = (prop) => {
  return (
    <TouchableOpacity style={{
      padding: 10,
      marginVertical: 15,
      backgroundColor: '#acf4bc',
      borderRadius: 10,
      width: 240,
      alignItems: 'center'
    }}
      onPress={prop.navigator}>
      <Text style={{
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        letterSpacing: .5
      }}>{prop.title}</Text>
    </TouchableOpacity>
  )
}

function ECommerceMenu({ navigation }) {
  return (
    <ImageBackground source={require("../assets/images/background.png")} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View>
          <Image
            style={{
              width: 250,
              height: 76.2,
              marginVertical: 20,
              marginHorizontal: 10
            }}
            source={require("../assets/images/logo.png")}
          />
        </View>

        <View
          style={{ alignItems: 'center', paddingTop: 20 }}>
          <CustomButton title="Buy Item" navigator={() => navigation.navigate('store')} />
          <CustomButton title="Drop Item" navigator={() => navigation.navigate('store')} />
          <CustomButton title="View Item" navigator={() => navigation.navigate('store')} />
          <CustomButton title="Payment" navigator={() => navigation.navigate('Start')} />
          <CustomButton title="Checkout" navigator={() => navigation.navigate('Start')} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create();
export default ECommerceMenu;
