import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ActionSheet from 'react-native-actionsheet';
import { savePhoto } from '../utils/request/functions';

export default class PoctureDetail extends PureComponent {
	constructor(props) {
		super(props);
		this._goBack = this._goBack.bind(this);
		this._showMenu = this._showMenu.bind(this);
		this._save = this._save.bind(this);
	}

	_goBack() {
		this.props.navigation.goBack();
	}
	 
	_showMenu() {
		this.ActionSheet.show();
	}

	_save(indent) {
		if (indent === 0) return;

		const images = this.props.navigation.getParam('images', null);
		// const index = this.props.navigation.getParam('index',0);
		const index = this.ImageViewer.state.currentShowIndex;
		const { url } = images[index];
		
		savePhoto(url);
	}

	render () {
		const { getParam } = this.props.navigation;

		const images = getParam('images', null);

		const index = getParam('index', 0);
		
		return (
			<View
				style={styles.container}
			>
				<ImageViewer
					ref={v => this.ImageViewer = v}
					imageUrls={images}
					onClick={this._goBack}
					index={index}
					onLongPress={this._showMenu}
					saveToLocalByLongPress={false}
					renderFooter={() => null}
				/>
				<ActionSheet
					ref={o => this.ActionSheet = o}
					title={'保存图片'}
					options={['保存图片到本地', '取消']}
					cancelButtonIndex={1}
					onPress={this._save}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});