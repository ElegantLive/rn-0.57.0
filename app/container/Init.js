import React, { Component } from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';

export default class Init extends Component {
	componentDidMount() {
		this.props.navigation.navigate('AppRouter');
	}
    
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator animating={true} size="large" />
			</View>
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