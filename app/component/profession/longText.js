import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

type Props = {
    text: string,
    style?: any,
}

export default class LongText extends PureComponent <Props> {
    constructor(props) {
        super(props)
    }

    render () {
        const {text,style} = this.props;

        return <Text 
            style={[styles.text,style]}
            includeFontPadding={true}
            numberOfLines={3}
            ellipsizeMode="tail"
        >
            {text}
        </Text>;
    }
}

const styles = StyleSheet.create({
    text:{
        paddingHorizontal:10
    }
})