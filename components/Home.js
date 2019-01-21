import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import Deck from './Deck';
import UniqueDeck from './UniqueDeck';

export default class Home extends React.Component {
  state = {
    nameDeck: '',
    numberCard: '',
  };

  async exemple() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.decks}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Deck')}>
            <Deck name={this.state.nameDeck} cards={this.state.numberCard} />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.addDeck}
          onPress={() => this.props.navigation.navigate('NewDeck')}>
          <Ionicons
            name="md-add-circle"
            size={60}
            color="#FFB90F"
          />
        </TouchableHighlight>
      </View>
    );
  }

  static navigationOptions = {
    title: 'DECKS',
    headerTitleStyle: {
      color: '#000',
    },
    headerStyle: {
      backgroundColor: '#FFB90F',
    },
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#696969',
    padding: 8,
  },
  decks: {
    flex: 6,
  },
  addDeck: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    zIndex: 1000,
  },
});
