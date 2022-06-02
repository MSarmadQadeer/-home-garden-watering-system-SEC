import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import ECommerceMenuScreen from './screens/ECommerceMenu';
import Signup from './screens/Signup';
import Ecommerce from './screens/ecommerce';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ECommerceMenu" component={ECommerceMenuScreen} />
        <Stack.Screen
          name="store"
          component={Ecommerce}
          options={{
            title: 'store',
            headerStyle: {
              backgroundColor: '#acf4bc',
            },
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{title: 'Signup'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
