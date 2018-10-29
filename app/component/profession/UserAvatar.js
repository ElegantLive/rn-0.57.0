import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CustomImage from '../base/CustomImage';

type Props = {
    type?:"small" | "default" | "large",
    style?: StyleSheet,
    source: object,
}

export default class UserAvatar extends PureComponent <Props> {
    static propTypes = {
        source:PropTypes.any.isRequired,
        type:PropTypes.oneOf(["small" , "default" , "large"]),
    }

    static defaultProps = {
        type:"default"
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {source,style,type} = this.props;

        return <CustomImage
            source={source}
            style={[styles[type],style]}
        />;
    }
}

const styles = StyleSheet.create({
    large:{
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    default:{
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    small:{
        width: 36,
        height: 36,
        borderRadius: 18,
    }
})