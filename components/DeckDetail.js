import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { orange, black } from '../constants/colors'
import { globalStyles} from '../constants/globalStyles'
import { getDeck } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'


class DeckDetail extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `${navigation.state.params.deckId} Deck`,
	})

	state = {
		deck: {
			title: '',
			questions: []
		}
	}

	componentDidMount() {
		this.getDeckData()
	}

	getDeckData = () => (
		getDeck(this.props.navigation.state.params.deckId)
			.then(( deck ) => {
				this.setState(() => ({ deck }))
				return deck;
			})
	)

	startQuiz = (deckId) => {
		clearLocalNotification()
			.then(setLocalNotification)
		this.props.navigation.navigate('Quiz', { deckId })
	}

	handleNewCard = (deckId) => (
		this.props.navigation.navigate('AddCard', { deckId })
	)

	render() {
		this.getDeckData()

		if (this.state.deck) {
			return (
				<View style={globalStyles.center}>
					<Text style={[styles.header]}>{this.state.deck.title}</Text>
					<Text style={[styles.cardCount]}>
						{this.state.deck.questions.length} Cards
					</Text>

					{this.state.deck.questions.length > 0 ? (
						<TouchableOpacity onPress={() => this.startQuiz(this.state.deck.title)}>
							<Text style={globalStyles.button}>Start Quiz</Text>
						</TouchableOpacity>
					) : (
						<Text style={{marginBottom: 20}}>Empty deck</Text>
					)}

					<TouchableOpacity onPress={() => this.handleNewCard(this.state.deck.title)}>
						<Text style={globalStyles.button}>Add new card</Text>
					</TouchableOpacity>

				</View>
			)
		}

		return null;
	}
}

const styles = StyleSheet.create({
	header: {
		marginBottom: 20,
		fontSize: 30,
		fontWeight: '500',
		color: orange,
		textAlign: 'center'
	},
	cardCount: {
		marginBottom: 60,
		fontSize: 24,
		color: black,
		textAlign: 'center'
	},
})

export default DeckDetail