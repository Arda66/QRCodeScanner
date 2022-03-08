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

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Menu"
          component={QRcodeButton}
          options={{title: 'Main Menu'}}
        />
        <Stack.Screen
          name="QRKodOkuyucu"
          component={QRCodeScan}
          options={{title: 'QRCodeScanner'}}
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
    <View style={styles.LogoandButton}>
      <TouchableOpacity onPress={() => navigation.navigate('QRKodOkuyucu')}>
        {/* Burdaki navigation bir işe yaramadı çıkartsak bile çalışıyor :/ */}
        <Image
          style={{
            width: 110,
            height: 70,
            borderRadius: 100,
          }}
          source={require('./src/images/icon.jpg')}></Image>
      </TouchableOpacity>
      <Text style={{marginTop: 5, color: 'red', fontWeight: 'bold'}}>
        QRcodeScanner
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LogoandButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 180,
  },
});

export default StackNavigator;
