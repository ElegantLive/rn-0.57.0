import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Left,Text,CardItem,Body, Right } from 'native-base';
import PropTypes from 'prop-types';
import UserAvatar from './userAvatar';
import LinkBar from '../base/linkBar';
// import { navigate } from '../../utils/navigation/service';

type Props = {
    name: string | Text, // username or title
    avatar: any, // user avatar
    avatarStyle?: any,
    description?: string | Text | Function,// descriptions
    right?: "follow" | "disfollow" | Component | Function, // right component
    cardPress?: "default" | Function, // called when the card onPress
    rightPress?: Function,// called when right onpress
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
            PropTypes.func,
            PropTypes.instanceOf(Text)
        ]),
        right:PropTypes.oneOfType([
            PropTypes.oneOf(['follow','disfollow']),
            PropTypes.element,
            PropTypes.func,
        ]),
        rightPress:PropTypes.func,
    }

    static defaultProps = {
        cardPress:null,
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
        const { description } = this.props;

        if (!description) return null;

        if (description instanceof Text) return description;

        if (typeof description === 'string') return <Text note>{description}</Text>;

        console.error('description',description,'was wrong');
    }

    _renderRight = () => {
        const { right } = this.props;

        if (typeof right === 'string') {
            const rightFollow = right.includes('follow');

            if (!rightFollow) console.error('right was wrong');

            const disStatus = right.includes('disfollow');

            return (
                <Right>
                    <LinkBar
                        title={(disStatus) ? "已关注": '关注'}
                        btnStyle ={(disStatus) ? styles.disfollowBtn: styles.followBtn}
                        titleStyle ={(disStatus) ? styles.disfollowTitle: styles.followTitle}
                        rounded
                        bordered
                        small
                        onPress={this.props.rightPress}
                    />
                </Right>
            );
        }

        return (right) ? <Right>{right}</Right>: <Right />;
    }

    render() {
        const { avatar, name, avatarStyle, cardPress } = this.props;

        const nameView = this._renderName(name);

        const descView = this._renderDesc();

        const rightView = this._renderRight();

        return (
            <CardItem
                button={(cardPress) ? true: false}
                style={styles.view}
                onPress={cardPress}
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
    },
    followBtn: {
        borderColor:BaseColor.skayBlue
    },
    followTitle: {
        color:BaseColor.skayBlue
    },
    disfollowBtn: {
        borderColor:BaseColor.GrayBG
    },
    disfollowTitle: {
        color:BaseColor.GrayBG
    }
})
