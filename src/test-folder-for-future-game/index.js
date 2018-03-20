import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class GameScreen extends Component {
    state: {
        gameStarted: boolean
    };

    constructor(props) {
        super(props);
        this.state={ gameStarted: false }
    }

    startGame = () => {
        this.setState({ gameStarted: true })
    }

    render() {
        const { gameStarted } = this.state
        return (
            <View>
                
            </View>
        )
    }
}
