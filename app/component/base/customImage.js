import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
import { Image,View,StyleSheet } from 'react-native';

type Props = {
    errorLoad?: Function,
    ...Image.prototype
}

export default class CustomImage extends PureComponent <Props> {
    constructor(props) {
        super(props);
        this.state = {
            wrong:false
        }
    }

    _error = () => {
        console.error('image load wrong');
        this.setState({
            wrong:true
        },this.props.errorLoad)
    }

    render() {
        let { source } = this.props;
        const { style } = this.props;

        const errorSource = require("../../resouces/img/wrong@1.png");

        source = this.state.wrong ? errorSource: source;
        return (
            <View style={styles.customImageView}>
                <FastImage 
                    {...this.props}
                    source={source}
                    style={style}
                    onError={this._error}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
	customImageView: {
		// flex: 1,
		justifyContent: 'center',
	},
});