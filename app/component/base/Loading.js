import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import { Spinner } from 'native-base';

let sibling = undefined;

const Loading = {
	show: () => {
		sibling = new RootSiblings(
			<View style={styles.maskStyle}>
				<View style={styles.backViewStyle}>
					<Spinner />
				</View>
			</View>
		);
	},

	hidden: () => {
		if (sibling instanceof RootSiblings) {
			sibling.destroy();
		}
	}
};

const styles = StyleSheet.create({
	maskStyle: {
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center'
	},
	backViewStyle: {
		backgroundColor: '#fff',
		width: 120,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	}
});

export { Loading };