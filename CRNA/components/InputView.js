import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class InputView extends React.Component {
  render() {
    return (
      <View style={styles.inputViewContainer}>
        <Text style={styles.centeredText}>Input component goes here! Verify user input & then show Alert component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputViewContainer: {
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
