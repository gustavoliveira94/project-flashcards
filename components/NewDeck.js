import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleNewDeck}>
          What is the title of your new Deck?
        </Text>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
          }}
        />
        <TouchableHighlight onPress={this.handlPress}>
          <Text style={styles.addNewDeck}>Add New Deck</Text>
        </TouchableHighlight>
      </View>
    );
  }

  static navigationOptions = {
    title: 'NEW DECK',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#696969',
    padding: 8,
  },
  titleNewDeck: {
    marginTop: 50,
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
  },
  addNewDeck: {
    marginTop: 20,
    backgroundColor: '#FFB90F',
    width: 300,
    color: '#696969',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
});
