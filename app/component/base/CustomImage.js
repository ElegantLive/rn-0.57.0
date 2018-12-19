import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

type Props = {
    errorLoad?: Function,
    ...FastImage.prototype
}

export default class CustomImage extends PureComponent <Props> {
    constructor(props) {
        super(props);
        this.state = {
            wrong:false
        };
        this._error = this._error.bind(this);
    }

    _error() {
        console.log('image load wrong');
        this.setState({
            wrong:true
        },this.props.errorLoad)
    }

    render() {
        let { source } = this.props;
        const { style } = this.props;

        source = this.state.wrong ? require("../../resouces/img/wrong@1.png"): source;

        return (
            <View
                style={[styles.view,style]}
            >
                <FastImage
                    {...this.props}
                    source={source}
                    onError={this._error}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        // flex:1
        borderRadius:5
    }
})