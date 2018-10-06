import React, { Component } from 'react';
import { View,ActivityIndicator } from 'react-native';
import { Theme } from "teaset";

export default class Init extends Component {
	componentDidMount() {
		this.props.navigation.navigate('AppRouter');
    }
    
	render() {
		return (
			<View>
				<ActivityIndicator animating={true} size="large" color={Theme.skayBlue} />
			</View>
		);
	}
}