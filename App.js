import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/home-screen';
import ChooseIconsScreen from './src/choose-icons-page';
import ChooseLevelScreen from './src/choose-level-screen';
import GameScreen from './src/test-folder-for-future-game';
import TakeAPicScreen from './src/choose-icons-page/TakeAPicPage';

const App = StackNavigator ({
    HomeScreen: { screen: HomeScreen },
    GameScreen: { screen: GameScreen },
    TakeAPicScreen: { screen: TakeAPicScreen },
    ChooseLevelScreen: { screen: ChooseLevelScreen },
    ChooseIconsScreen: { screen: ChooseIconsScreen },
});

export default App;
