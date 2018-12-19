import React, { Component } from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Container } from 'native-base';
import NavBar from '../component/base/NavBar';
import backHandler from '../component/higher/backHandler';

@backHandler
export default class Shop extends Component {
	render() {
		return (
			<Container>
				<NavBar 
					left="drawer"
					headerTitle='商城'
				/>
				<View style={styles.container}>
					<Text>Shop screen</Text>
					<Button title="go to home" onPress={() => this.props.navigation.navigate('Home')} />
					<Button title="go to FindPwd" onPress={() => this.props.navigation.navigate('FindPwd')} />
					<Button title="press me for test log" onPress={() => console.log(`test for ${JSON.stringify(this.props)}`)} />
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});