import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Left,Text,CardItem,Body } from 'native-base';
import PropTypes from 'prop-types';
import UserAvatar from './userAvatar';

type Props = {
    name: string | Text, // 用户名
    avatar: any, // 用户头像
    avatarStyle?: any,
    description?: string | Text,// 副标题
    right?: Component, // 右边组件内容
}

export default class UserCard extends PureComponent <Props> {
    static propTypes = {
        name:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Text)
        ]).isRequired,
        avatar:PropTypes.any.isRequired,
        description:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Text)
        ]),
        right:PropTypes.element
    }

    constructor(props) {
        super(props)
    }

    _renderName = (name) => {
        if (name instanceof Text) return name;

        if (typeof name === 'string') return <Text>{name}</Text>;

        console.error('name',name,'was wrong');
    }

    _renderDesc = () => {
        const {description} = this.props;

        if (!description) return null;

        if (description instanceof Text) return description;

        if (typeof description === 'string') return <Text note>{description}</Text>;

        console.error('description',description,'was wrong');
    }

    _renderRight = () => {
        const {right} = this.props;

        return (right) ? right: null;
    }

    render() {
        const {avatar,name,avatarStyle} = this.props;

        const nameView = this._renderName(name);

        const descView = this._renderDesc();

        const rightView = this._renderRight();

        return (
            <CardItem 
                style={styles.view}
            >
                <Left>
                    <UserAvatar
                        source = {avatar}
                        style  = {avatarStyle}
                    />
                    <Body>
                        {nameView}
                        {descView}
                    </Body>
                </Left>
                {rightView}
            </CardItem>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flexWrap:"wrap"
    }
})
