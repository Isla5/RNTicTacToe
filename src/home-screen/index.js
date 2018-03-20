import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import GeneralBackground from '../components/generalBackground';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    buttonProps = [
        {
            buttonText: "START A GAME",
            onButtonPress: () => this.navigateToScreen('ChooseIconsScreen'),
        },
        {
            buttonText: "LEVELS",
            onButtonPress: () => this.navigateToScreen('ChooseLevelScreen'),
        },
        {
            buttonText: "QUIT",
            onButtonPress: this.exitApp,
        },
    ]

    navigateToScreen = (screenName) => {
        this.props.navigation.navigate(screenName)
    };

    exitApp = () => {
        BackHandler.exitApp()
    };

    render() {
        return (
            <GeneralBackground
                buttonProps={this.buttonProps}
            />
        )
    }
}
