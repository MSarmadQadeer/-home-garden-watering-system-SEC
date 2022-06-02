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

function Signup({ navigation }) {
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
          <Text style={styles.labels}>Username</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.labels}>Full Name</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.labels}>Email</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.labels}>Password</Text>
          <TextInput style={styles.textInput}></TextInput>

          <TouchableOpacity style={{
            padding: 10,
            paddingHorizontal: 30,
            backgroundColor: '#acf4bc',
            borderRadius: 25,
            marginTop: 50
          }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
              letterSpacing: .5
            }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  labels: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  textInput: {
    borderBottomWidth: 1,
    width: 200
  }
});
export default Signup;
