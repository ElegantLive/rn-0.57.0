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

// 头部一般不会变动更新，所以用浅对比的purecomponent
export default class NavBar extends PureComponent<Props> {
    static propTypes = {
        headerTitle:PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
    }

    goBack = () => {
        NavigationService.back()
    }

    goDrawer= () => {
        NavigationService.drawer()
    }

    renderLeft() {
        const props = this.props;

        if (!props.left) return <Left />

        const leftStyles = (props.leftStyle) ? props.leftStyle: {} ;

        const defaultLeft = (<Button
            transparent = {true}
            iconLeft
            style={styles.leftBtn}
        >
            {this.renderLeftIcon(props.left)}
        </Button>);

        const leftComponents = (typeof props.left === "string") ? defaultLeft: props.left;

        return (
            <Left style={leftStyles}>
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
            Promise.reject('left is not string');
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
        color:BaseColor.skayBlue
    },
    leftBtn:{
        color:BaseColor.skayBlue
    },
    headerTitle:{
        color:BaseColor.blank
    },
    header:{
        backgroundColor:BaseColor.brandLight,
        color:'white'
    }
})