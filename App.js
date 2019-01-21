import * as React from 'react';
import { Constants } from 'expo';
import Home from './components/Home';
import UniqueDeck from './components/UniqueDeck';
import NewDeck from './components/NewDeck'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Deck: UniqueDeck,
    NewDeck: NewDeck
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
