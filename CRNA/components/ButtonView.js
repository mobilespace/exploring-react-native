import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ButtonView extends React.Component {
  render() {
    return (
      <View style={styles.buttonViewContainer}>
        <Text style={styles.centeredText}>Button goes here! Click to change background color.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonViewContainer: {
    backgroundColor: '#FEFBD0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    marginTop: 50
  },
  centeredText: {
    color: '#775D6A',
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 30
  }
});
