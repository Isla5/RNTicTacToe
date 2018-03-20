import React, { PureComponent } from 'react';

import {
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    Clipboard,
    StatusBar,
    Button,
    Image,
    Share,
    Text,
    View,
} from 'react-native';

import Exponent, {
    ImagePicker,
    Constants,
} from 'expo';

export default class TakeAPicScreen extends PureComponent {
  // TODO Needs a greaaaaat refactor
    state = {
        image: null,
        uploading: false,
    };

    render() {
        let { image } = this.state;

      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <Button
                  onPress={this._pickImage}
                  title="Pick an image from camera roll"
              />

              <Button onPress={this._takePhoto} title="Take a photo" />

              {this._maybeRenderImage()}
              {this._maybeRenderUploadingOverlay()}

              <StatusBar barStyle="default" />
          </View>
      );
    }

    _maybeRenderUploadingOverlay = () => {
        if (this.state.uploading) {
            return (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    ]}
                >
                    <ActivityIndicator color="#fff" animating size="large" />
                </View>
            );
        }
    };

    _maybeRenderImage = () => {
        let { image } = this.state;
        if (!image) {
            return;
        }

        return (
            <View
                style={{
                    width: 250,
                    elevation: 2,
                    marginTop: 30,
                    shadowRadius: 5,
                    borderRadius: 3,
                    shadowOpacity: 0.2,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffset: { width: 4, height: 4 },
                }}
            >
                <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
            </View>
        );
    };

    _share = () => {
        Share.share({
            message: this.state.image,
            title: 'Check out this photo',
            url: this.state.image,
        });
    };

    _takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        this._handleImagePicked(pickerResult);
    };

    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        this._handleImagePicked(pickerResult);
    };

    _handleImagePicked = async pickerResult => {
        let uploadResponse, uploadResult;

        try {
            this.setState({ uploading: true });

            if (!pickerResult.cancelled) {
                uploadResponse = await uploadImageAsync(pickerResult.uri);
                uploadResult = await uploadResponse.json();
                this.setState({ image: uploadResult.location });
            }
        } catch (e) {
            alert('Upload failed');
        } finally {
            this.setState({ uploading: false });
        }
    };
}

async function uploadImageAsync(uri) {
    let apiUrl = 'https://file-upload-example-backend-dkhqoilqqn.now.sh/upload';

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append('photo', {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
    });

    let options = {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
    };

    return fetch(apiUrl, options);
}
