import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AppRegistry,
  Linking,
  Button,
  Modal,
  RefreshControl,
} from 'react-native'; /* rnc yazınca react native otomatik template oluşturuyor bizim için , rnfe function component export yapıyor*/
import React, {Component, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
/* import {AirbnbRating} from 'react-native-elements';
 */ ('use strict');

export default class QRCodeScan extends Component {
  constructor(props) {
    /* Usestate equivalent in class component */
    super(props);
    this.state = {
      navigation:
        '' /* We set prop value default so we can use to navigate in onpress  function later  */,
    };
  }

  /*  RefreshController = () => {
    const [Refreshing, SetRefreshing] = useState(false);
  }; */
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        styles={{flex: 1}}
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={[styles.centerText, styles.textBold]}>
            Scan QR Code, it detects automatically.
          </Text>
        }
        bottomContent={
          <View
            style={styles.BottomContainer}
            RefreshControl={<RefreshControl refreshing={false} onRefresh />}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.props.navigation.navigate('RateUsScreen')}>
              <Text style={styles.Text}>Rate us!</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.Button]}
              onPress={() =>
                this.props.navigation.navigate('GiveUsFeedBackScreen')
              }>
              <Text style={styles.Text}>Give us a feedback!</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.buttonTouchable}>
            <AirbnbRating
              count={5}
              defaultRating={1}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              showRating
            />
          </TouchableOpacity> */}
          </View>
        }
      />
    );
  }
}
/* const RateuspressHandler = () => {
  return <RateUsPopUpScreen style={{visible: true}} />;
};

const RateUsPopUpScreen = () => {
  return (
    <Modal visible={false} transparent={true}>
      <Text styles={{centerText}}>Hello</Text>
    </Modal>
  );
};
const GiveUsFeedBackScreen = () => {
  return <Modal visible={false}></Modal>;
}; */

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 17,
    padding: 32,
    color: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    flex: 1,
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    flex: 1,
  },
  BottomContainer: {
    flexDirection: 'row',
    marginTop: 70,
    flex: 1,
    alignItems: 'center',
  },
  Button: {
    width: 100,
    height: 50,
    backgroundColor: '#33ccff',
    marginHorizontal: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('default', () => QRCodeScan);
