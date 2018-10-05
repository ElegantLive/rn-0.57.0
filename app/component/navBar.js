// import React, { PureComponent } from 'react';
// import NavigationService from '../utils/navigation/service';
// import PropTYpes from 'prop-types';
// import { StyleSheet } from 'react-native';
// import { 
//     Header,
//     Left,
//     Body,
//     Right, 
//     Button, 
//     Title, 
//     Icon,
// } from 'native-base';

// type Props = {
//     headerTitle : any,
//     style?: any,
//     left?: any,
//     leftStyle?: any,
//     right?: any,
//     rightStyle?: any,
//     onLeftPress?: Function,// 左边触摸事件
//     onRightPress?: Function,// 右边触摸事件
// }

// export default class NavBar extends PureComponent<Props> {
//     static propTypes = {
//         headerTitle:PropTYpes.string.isRequired,
//     }

//     constructor(props) {
//         super(props)
//     }

//     goBack = () => {
//         NavigationService.back()
//     }

//     renderLeft() {
//         const props = this.props;

//         if (!props.left) return null;

//         const leftStyles = (props.leftStyle) ? props.leftStyle: {} ;

//         const defaultLeft = (<Button
//             transparent = {true}
//             iconLeft
//         >
//             <Icon name='arrow-back' onPress={this.goBack} style={styles.leftIcon}/>
//         </Button>);

//         const leftComponents = (props.left === "default") ? defaultLeft: props.left;

//         return (
//             <Left style={leftStyles}>
//                 {leftComponents}
//             </Left> 
//         )
//     }

//     renderRight() {
//         const props = this.props;

//         if (!props.right) return null;

//         const rightStyls = (props.rightStyle) ? props.rightStyle: {} ;

//         return (
//             <Right style={[rightStyls,styles.headerRightTitle]}>
//                {props.right}
//             </Right>
//         )
//     }

//     render() {
//         console.log('nav');
//         const props = this.props;
//         const styles = (props.style) ? props.style: {} ;

//         return (
//             <Header
//                 style={styles.header}
//             >
//                 { this.renderLeft() }
//                 <Body>
//                     <Title style={styles.headerTitle}>{props.headerTitle}</Title>
//                 </Body>
//                 { this.renderRight() }
//             </Header>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     leftIcon:{
//         fontSize:24,
//     },
//     headerTitle:{
//         // color:diyColor.skayBlue
//     },
//     headerRightTitle:{
//         color:'white'
//     },
//     header:{
//         // backgroundColor:diyColor.skayBlue
//     }
// })