import React, { PureComponent } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import CustomImage from '../component/base/CustomImage';
import { showMessage } from 'react-native-flash-message';
import { autoImageForFullScreen } from '../utils/functions';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ActionSheet } from 'native-base';
import LinkBar from '../component/base/LinkBar';

const buttons = [
	<LinkBar 
		title="保存到本地"
	/>,
	'取消'
];

const CANCEL_INDEX = 1;

export default class PoctureDetail extends PureComponent {
	_goBack = () => this.props.navigation.goBack();

	_showMenu = () => {
		ActionSheet.show({
			options:buttons,
			cancelButtonIndex:CANCEL_INDEX,
			title:"你要把我保存起来么?"
		},index => {
			console.log(index,'onpress');
		})
	}

    render () {
		const images = this.props.navigation.getParam('images',null);
		const index = this.props.navigation.getParam('index',0);

		// if (!source || !(source.uri)) {
		// 	showMessage({
		// 		type:"danger",
		// 		icon:"danger",
		// 		message:"请选择图片"
		// 	});
		// 	return null;
		// }

		// const style = autoImageForFullScreen(source);
		// const images = [
		// 	{url:source.uri},
		// 	{url:source.uri},
		// 	{url:source.uri},
		// 	{url:source.uri},
		// ];
		console.log(images);

        return (
			<ImageViewer 
				imageUrls={images}
				onClick={this._goBack}
				index={index}
				onLongPress={this._showMenu}
				saveToLocalByLongPress={false}
			/>
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