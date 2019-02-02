import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { Constants } from 'expo'
import { Decks, NewDeck, DeckDetail, AddCard, Quiz } from './components'
import { orange, white } from './constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { setLocalNotification } from './utils/notifications'


function FlashcardsStatusBar ({backgroundColor, ...props}) {
	return (
		<View style={{backgroundColor, height: Constants.StatusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const Tabs = createBottomTabNavigator({
	Decks: {
		screen: Decks,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='book' size={30} color={tintColor} />
		}
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'New Deck',
			tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='plus' size={30} color={tintColor} />
		}
	}
},
{
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: orange,
		style: {
			height: 56,
			backgroundColor:  white,
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
})

const MainNavigator = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			title: 'Flashcards',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: orange
			}
		}
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: orange
			}
		}
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: orange
			}
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: orange
			}
		}
	}
})

const AppNavigator = createAppContainer(MainNavigator)

export default class App extends Component {
	componentDidMount() {
		setLocalNotification()
	}
	render() {
		return (
			<View style={{flex:1}}>
				<FlashcardsStatusBar backgroundColor={orange} barStyle='light-content' />
				<AppNavigator />
			</View>
		);
	}
}