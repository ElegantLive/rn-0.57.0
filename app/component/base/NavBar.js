import React, { PureComponent } from 'react';
import NavigationService from '../../utils/navigation/service';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { 
    Header,
    Left,
    Body,
    Right, 
    Button, 
    Title, 
    Icon,
} from 'native-base';

type Props = {
    headerTitle : string,
    style?: any,
    left?: any,
    leftStyle?: any,
    right?: any,
    rightStyle?: any,
    onLeftPress?: Function,// 左边触摸事件
    onRightPress?: Function,// 右边触摸事件
}

// 头部一般不会变动更新，所以用浅对比的'purecomponent'
export default class NavBar extends PureComponent <Props> {
    static propTypes = {
        headerTitle:PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props)
    }

    goBack = () => NavigationService.back();

    goDrawer= () => NavigationService.drawer();

    renderLeft() {
        let { left, leftStyle } = this.props;

        if (!left) return <Left />

        const leftComponents = (typeof left === "string") ? (<Button
            transparent = {true}
            iconLeft
            style={styles.leftBtn}
        >
            {this.renderLeftIcon(left)}
        </Button>): left;

        return (
            <Left style={leftStyle}>
                {leftComponents}
            </Left> 
        )
    }

    renderLeftIcon(left) {
        if (typeof left === "string") {
            const backIcon = <Icon 
                name='arrow-back' 
                onPress={this.goBack} 
                style={styles.leftIcon}
            />;
            const drawerIcon = <Icon 
                type="Entypo" 
                name='menu' 
                onPress={this.goDrawer} 
                style={styles.leftIcon}
            />;
            switch (left) {
                case 'back':
                    return backIcon;
                case 'drawer':
                    return drawerIcon;
            }
        }else{
            return null;
        }
    }

    renderRight() {
        const props = this.props;

        if (!props.right) return <Right />

        const rightStyls = (props.rightStyle) ? props.rightStyle: {} ;

        return  (
            <Right style={rightStyls}>
               {props.right}
            </Right>
        )
    }

    render() {
        const props = this.props;
        const headerStyle = (props.style) ? props.style: {} ;

        return (
            <Header
                style={[styles.header,headerStyle]}
            >
                { this.renderLeft() }
                <Body>
                    <Title style={styles.headerTitle}>{props.headerTitle}</Title>
                </Body>
                { this.renderRight() }
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    leftIcon:{
        fontSize:24,
        color:'white'
    },
    leftBtn:{
        color:'white'
    },
    headerTitle:{
        color:'white'
    },
    header:{
        backgroundColor:BaseColor.skayBlue,
    }
})