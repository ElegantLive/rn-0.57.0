import React, {Component} from 'react';
import RootSiblings from 'react-native-root-siblings';
import {View, Text, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const tview = (msg, viewstyle, singleicon) => {
	const single = (singleicon) ? singleicon : <Icon name='check' size={50} color={'#fff'}/>;

	return (
		<View style={[styles.container, viewstyle]}>
			{single}
			<Text style={styles.message}>{msg}</Text>
		</View>
	);
};


const Toast = {

	show: (msg) => {
		console.log(msg);
		const _toast = new RootSiblings(
			<View style={styles.container}>
				<Icon name='check' size={50} color={'#fff'}/>
				<Text style={styles.message}>{msg}</Text>
			</View>
		);
	},

	showLong: msg => {
		this.toast = RootToast.show(msg, {
			position: 0,
			duration: 2000
		});
	},

	showSuccess: (msg, options) => {
		const toast = RootToast.show(
			Platform.OS === 'ios' ?
				<View style={styles.container}>
					<Icon name='check' size={50} color={'#fff'}/>
					<Text style={styles.message}>{msg}</Text>
				</View> : msg, {
				duration: 1500,
				position: RootToast.positions.CENTER,
				...options,
			});
		setTimeout(function () {
			RootToast.hide(toast);
			typeof options === 'function' ? options && options() : null;
		}, 2000);
	},

	showLongSuccess: (msg, options) => {
		const toast = RootToast.show(
			Platform.OS === 'ios' ?
				<View style={styles.container}>
					<Icon name='check' size={50} color={'#fff'}/>
					<Text style={styles.message}>{msg}</Text>
				</View> : msg, {
				duration: 2000,
				position: RootToast.positions.CENTER,
				...options,
			});
		setTimeout(function () {
			RootToast.hide(toast);
			typeof options === 'function' ? options && options() : null;
		}, 2500);
	},

	showWarning: (msg, options) => {
		const toast = RootToast.show(
			Platform.OS === 'ios' ?
				<View style={styles.container}>
					<Icon name='warning' size={40} color={'#fff'}/>
					<Text style={styles.message}>{msg}</Text>
				</View> : msg, {
				duration: RootToast.durations.SHORT,
				position: RootToast.positions.CENTER,
				...options,
			});
		setTimeout(function () {
			RootToast.hide(toast);
		}, RootToast.durations.SHORT + 500);
	},

	showError: (msg, options) => {
		const toast = RootToast.show(
			Platform.OS === 'ios' ?
			// <View style={styles.container}>
			//   <Icon name='close' size={40} color={'#fff'}/>
			//   <Text style={styles.message}>{msg}</Text>
			// </View>
				msg : msg, {
				duration: RootToast.durations.SHORT,
				position: RootToast.positions.CENTER,
				...options,
			});
		setTimeout(function () {
			RootToast.hide(toast);
		}, RootToast.durations.SHORT + 500);
	}

};

var styles = StyleSheet.create({
	container: {
		width: 140,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		color: '#fff',
		marginTop: 10,
		textAlign: 'center',
		lineHeight: 20,
	}
});

export {Toast};