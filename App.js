import React, {Component} from 'react';
import {CheckBox} from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
  Image,
} from 'react-native';

import QRCodeScan from './src/Components/QRCodeScan';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import RateUsScreen from './src/Components/RateUsScreen';
import GiveUsFeedbackScreen from './src/Components/GiveUsFeedbackScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen
          name="Main Menu"
          component={QRcodeButton}
          options={{title: 'Main Menu'}}
        />
        <Stack.Screen
          name="QRCodeScanner"
          component={QRCodeScan}
          options={{title: 'QRCodeScanner'}}
        />
        <Stack.Screen
          name="RateUsScreen"
          component={RateUsScreen}
          options={{title: 'Thanks for your rating!'}}
        />
        <Stack.Screen
          name="GiveUsFeedBackScreen"
          component={GiveUsFeedbackScreen}
          options={{title: 'Thanks for your feedback!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* const FeedbackTickBox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <CheckBox
      center
      checked={checked}
      checkedColor="#0F0"
      checkedTitle="Thanks!"
      containerStyle={{width: '75%'}}
      onIconPress={() => setChecked(!checked)}
      size={30}
      textStyle={{}}
      title="Tick if you like it and give us a feedback!"
      titleProps={{}}
      uncheckedColor="#F00"
    />
  );
}; */

const QRcodeButton = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text style={styles.Text1}>Welcome to the QRCodeScanner!</Text>
        <Text style={styles.Text2}>Press the button below !</Text>
        <Text style={styles.Text2}>for Scanning!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('QRCodeScanner')}>
        <Image
          style={styles.button}
          source={require('./src/images/icon.jpg')}></Image>
      </TouchableOpacity>
      <Text style={{marginTop: 5, color: 'black', fontWeight: 'bold'}}>
        QRcodeScanner
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
  },
  button: {
    width: 110,
    height: 70,
    borderRadius: 100,
  },
  Text1: {
    bottom: 250,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 24,
  },
  Text2: {
    bottom: 220,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 24,
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StackNavigator;
