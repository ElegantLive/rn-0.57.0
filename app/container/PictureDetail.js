import React, { PureComponent } from 'react';
import { View,StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ActionSheet from 'react-native-actionsheet';
import { savePhoto } from '../utils/request/functions';

export default class PoctureDetail extends PureComponent {
	_goBack = () => this.props.navigation.goBack();

	_showMenu = () => this.ActionSheet.show();

	_save = () => {
		const images = this.props.navigation.getParam('images',null);
		// const index = this.props.navigation.getParam('index',0);
		const index = this.ImageViewer.state.currentShowIndex;
		const { url } = images[index];
		
		savePhoto(url);
	}

    render () {
		const images = this.props.navigation.getParam('images',null);

		const index = this.props.navigation.getParam('index',0);
		
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
					renderFooter={()=> { return null }}
				/>
				<ActionSheet
					ref={o => this.ActionSheet = o}
					title={"保存图片"}
					options={['保存图片到本地', '取消']}
					cancelButtonIndex={1}
					onPress={(index) => (index === 0) ? this._save(): null}
				/>
			</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1
	},
});