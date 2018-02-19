import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import MARS_PLANET from '../images/mars.png';

export default class ImageView extends React.Component {
  render() {
    return (
      <View style={styles.imageViewContainer}>
        <View style={styles.imageRowContainer}>
          <Image source={{uri: "https://intpolicydigest.org/wp-content/uploads/2015/11/1591899719451.jpg"}}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.imageRowContainer}>
          <View style={styles.imageColContainer}>
            <Image source={MARS_PLANET}
              style={{ height: 150, width: 150, borderRadius: 75 }}
            />
          </View>
          <View style={styles.imageColContainer}>
            <Image source={{ uri: "https://3bonlp1aiidtbao4s10xacvn-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/mars-rover.jpg" }}
              style={{ height: 150, width: 150 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#193441',
    marginTop: 50
  },
  imageRowContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 200
  },
  imageColContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
