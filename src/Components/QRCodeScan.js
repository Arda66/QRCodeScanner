import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AppRegistry,
  Linking,
} from 'react-native'; /* rnc yazınca react native otomatik template oluşturuyor bizim için , rnfe function component yapıyor*/
import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
('use strict');

export default class QRCodeScan extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        /* topContent={
                <Text style={styles.centerText}>
                  Go to{' '}
                  <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                  your computer and scan the QR code.
                </Text>
              } */
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}></TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
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
});

AppRegistry.registerComponent('default', () => QRCodeScan);