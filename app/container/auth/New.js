import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class New extends Component {
	constructor(props) {
		super(props);
		this.res = this.res.bind(this);
	}

	res() {
		const lei = '我好累啊';
		const l = <Text>{lei}</Text>;

		return l;
	}

	render() {
		return (
			<View>
				<Text> new Component {this.res()} </Text>
			</View>
		);
	}
}
