import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ListView extends React.Component {
  render() {
    return (
      <View style={styles.listViewContainer}>
        <Text style={styles.centeredText}>ListView goes here. Show a list of all community members with avatar on the left; name on left and github username (@monte9) on the right.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listViewContainer: {
    backgroundColor: '#FEFBD0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    marginVertical: 50
  },
  centeredText: {
    color: '#775D6A',
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 30
  }
});
