import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.deck}>
        <Text style={styles.titleDeck}>Sobre React</Text>
        <Text style={styles.numberCard}>3 Cards</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#FFB90F',
  },
  titleDeck: {
    fontSize: 18,
    color: '#696969',
    alignItems: 'center'
  },
  numberCard: {
    color: '#696969',
  },
});
