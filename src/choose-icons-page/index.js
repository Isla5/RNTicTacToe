import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import RoundButton from '../components/roundButton';

export default class ChooseIconsScreen extends Component {
    // TODO Needs a greaaaaat refactor
    buttonProps = [
        {
            buttonText: "DO NOT CHANGE",
            onButtonPress: () => this.props.navigation.navigate('GameScreen'),
        },
        {
            buttonText: "CUSTOMIZE PICS",
            onButtonPress: () => this.props.navigation.navigate('TakeAPicScreen'),
        },
    ];

    render() {
        const remote = 'https://besthqwallpapers.com/Uploads/15-12-2016/10947/thumb2-fsociety-mask-4k-black-background.jpg';

        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: remote }}
            >
                <View style={styles.MainContainer}>
                    {
                      this.buttonProps.map((b, i) => <RoundButton key={i} buttonProps={b}/>)
                    }

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },
});
