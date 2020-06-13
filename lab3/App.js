import * as React from 'react';
import { Button, Image, View, Alert, Text, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = { image: null }

  render() {

    let { image } = this.state;

    return (
      <View 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          title="Открыть камеру" 
          onPress={this.makeImage} />
        {
          image && 
          <View>
            <Image 
              source={{ uri: image }} 
              style={{ width: 200, height: 200, marginTop: 30 }} />
            <Button 
              title="Сохранить" 
              onPress={this.saveImage} />
          </View>
        }
      </View>
    );
  }

  askForPermissions = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
      Alert.alert('Ошибка', 'Разрешите приложению использовать камеру');
      return false;
    }
    return true;
  }

  makeImage = async () => {
    try {
      const hasPermissions = await this.askForPermissions()
      if (!hasPermissions) return;
      const img = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!img.cancelled) { this.setState({ image: img.uri }) }
    } catch (e) {
      //console.log(e);
    }
  }

  saveImage = async () => {
    try {
      await MediaLibrary.saveToLibraryAsync(this.state.image);

      Alert.alert('Сохранено!', 'Фотография успешно сохранена');
      this.setState({ image: null });
    } catch (e) {
      //console.log(e);
    }
  }
}