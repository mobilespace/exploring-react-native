import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import ImageView from './components/ImageView';
import ButtonView from './components/ButtonView';
import InputView from './components/InputView';
import ListView from './components/ListView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <ImageView />
          <ButtonView />
          <InputView />
          <ListView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1481E6'
  }
});
