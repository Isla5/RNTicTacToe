import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container } from 'native-base';

export default class RoundButton extends Component {

    render() {
        const {
          buttonText,
          onButtonPress,
        } = this.props.buttonProps;

        if (buttonText === 'BACK' && Platform.OS === 'ios') {
              return null;
        }

        return (
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                onPress={onButtonPress}
                activeOpacity = { 0.5 }
             >
                <Text style={styles.TextStyle}>
                    {buttonText}
                </Text>
             </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  SubmitButtonStyle: {
    marginTop:10,
    paddingTop:15,
    marginLeft:30,
    borderWidth:1,
    marginRight:30,
    borderRadius:10,
    paddingBottom:15,
    borderColor: '#fff',
    backgroundColor:'#00BCD4',
  },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  IconStyles:{
      color:'#fff',
  },
});
