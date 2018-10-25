import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';

type Props = {
    errorLoad?: Function,
    ...FastImage.prototype
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

        source = this.state.wrong ? require("../../resouces/img/wrong@1.png"): source;

        return (
            <FastImage
                {...this.props}
                source={source}
                style={style}
                onError={this._error}
            />
        )
    }
}