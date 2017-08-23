import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { ImagePicker } from 'expo';
import strings from '../constants/strings/screens/ProfileScreen-strings';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={style.container}>
        <Button title={strings.heading} onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={style.image} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const style = StyleSheet.create({
  image: { width: 300, height: 300 },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
