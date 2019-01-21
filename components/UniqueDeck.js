import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class UniqueDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleDeck}>Sobre React</Text>
        <Text style={styles.numberCard}>3 Cards</Text>
        <TouchableHighlight onPress={this.handlPress}>
          <Text style={styles.addCard}>Add Card</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlPress}>
          <Text style={styles.startQuiz}>Start Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }

  static navigationOptions = {
    title: 'DECK',
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
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25,
    backgroundColor: '#FFB90F',
  },
  titleDeck: {
    marginTop: 100,
    fontSize: 26,
    color: '#696969',
  },
  numberCard: {
    marginTop: 30,
    fontSize: 20,
    color: '#696969',
  },
  addCard: {
    marginTop: 60,
    backgroundColor: 'transparent',
    borderColor: '#696969',
    width: 300,
    borderWidth: 1,
    color: '#696969',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  startQuiz: {
    marginTop: 20,
    backgroundColor: '#696969',
    width: 300,
    color: '#FFB90F',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
});
