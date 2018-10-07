import React, { Component } from 'react';
import { View,ActivityIndicator } from 'react-native';

export default class Init extends Component {
	componentDidMount() {
		this.props.navigation.navigate('AppRouter');
    }
    
	render() {
		return (
			<View>
				<ActivityIndicator animating={true} size="large" />
			</View>
		);
	}
}