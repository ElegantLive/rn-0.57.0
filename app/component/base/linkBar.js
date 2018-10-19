import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';

type Props = {
    title : string,
    btnStyle?: any,
    titleStyle?: any,
    ...Button.propTypes,
}

// 浅对比
export default class LinkBar extends PureComponent <Props> {
    static propTypes = {
        title:PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
    }

    render(){
        const {title,btnStyle,titleStyle,...props} = this.props;
        return (
            <Button
                {...props}
                style={btnStyle}
            >
                <Text
                    style={titleStyle}
                >{title}</Text>
            </Button>
        )
    }
}