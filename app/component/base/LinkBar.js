import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';

type Props = {
    title : string,
    btnStyle?: any,
    titleStyle?: any,
    ...Button.propTypes,
}

// use 'PureComponent'
export default class LinkBar extends PureComponent <Props> {
    static propTypes = {
        title:PropTypes.string.isRequired,
    };

    static defaultProps = {
        btnStyle:{},
        titleStyle:{}
    };

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