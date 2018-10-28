import React, { PureComponent } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import CustomImage from '../component/base/CustomImage';
import { showMessage } from 'react-native-flash-message';
import { autoImageForFullScreen } from '../utils/functions';
import FastImage from 'react-native-fast-image';

export default class PoctureDetail extends PureComponent {
    render () {
		const source = this.props.navigation.getParam('source',null);

		if (!source || !(source.uri)) {
			showMessage({
				type:"danger",
				icon:"danger",
				message:"请选择图片"
			});
			return null;
		}

		const style = autoImageForFullScreen(source);

        return (
            <View style={styles.container}>
                <CustomImage
					source = {source}
					style = {style}
				/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#000',
	},
});