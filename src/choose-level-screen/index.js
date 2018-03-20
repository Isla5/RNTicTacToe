import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../home-screen';
import GeneralBackground from '../components/generalBackground';

class ChooseLevelComponent extends Component {
    static navigationOptions = {
          header: null
    };

    onBackPress = () => {
        this.props.navigation.navigate('HomeScreen')
    };

    render() {
        return (
            <GeneralBackground
                hasTabs
                headerTitle="Levels"
                buttonProps={this.buttonProps}
                onBackPress={this.onBackPress}
                navigation={this.props.navigation}
            />
        )
    }
}

const ChooseLevelScreen = TabNavigator (
    {
        'Level 1': { screen: props => <ChooseLevelComponent navigation={props.navigation} levelOption={1} /> },
        'Level 2': { screen: props => <ChooseLevelComponent navigation={props.navigation} levelOption={2} /> },
        'Level 3': { screen: props => <ChooseLevelComponent navigation={props.navigation} levelOption={3} /> },
    },
    {
        navigationOptions: { header: null },
        tabBarOptions: {
            inactiveTintColor: 'gray',
            activeTintColor: 'green',
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default ChooseLevelScreen;
