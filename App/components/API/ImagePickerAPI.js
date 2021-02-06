import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImagePickerAPI = ({

}) => {


  return (
    <View>
      <TouchableOpacity onPress={() =>
        ImagePicker.showImagePicker(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            setResponse(response);
          },
        )
      }>
        <Text>
          Galley
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default ImagePickerAPI;