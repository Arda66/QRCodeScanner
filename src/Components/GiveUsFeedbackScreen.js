import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React from 'react';

const GiveUsFeedbackScreen = ({navigation}) => {
  const [text, SetText] = React.useState(null);
  const AfterPressedButton = () => {
    SetText(null);
    Alert.alert(
      'Thanks for your feedback!',
      'Now you will return to the Main Menu!',
      [{text: 'OK', onPress: () => navigation.navigate('Main Menu')}],
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Give us your feedback in the box below!</Text>
      <TextInput
        style={styles.input}
        onChangeText={SetText}
        value={text}
        placeholder="Write your feedback here!"
        keyboardType="default"
        numberOfLines={1}
      />
      <TouchableOpacity style={styles.button} onPress={AfterPressedButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: '6%',
    margin: '5%',
    width: '70%',
    borderWidth: 1,
    padding: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#33ccff',
    marginHorizontal: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GiveUsFeedbackScreen;
