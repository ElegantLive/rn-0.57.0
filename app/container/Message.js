import React, { Component } from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Container } from 'native-base';
import NavBar from '../component/base/NavBar';

export default class Message extends Component{
	render(){
		return (
			<Container>
				<NavBar 
					left="drawer"
					headerTitle='消息'
				/>
				<View style={styles.container}>
					<Text>Message screen</Text>
					<Button title="go to home" onPress={() => this.props.navigation.navigate('Home')} />
					<Button title="go back" onPress={() => this.props.navigation.goBack()} />
					<Button title="asnycInit" onPress={() => console.log(`test for ${JSON.stringify(this.props)}`)} />
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