import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import LinkBar from './linkBar';

type Props = {
    spinner ?: 'default' | Spinner, // 设置为null来隐藏/使用default来使用默认/使用spinner自定义
    text ?: string | Text,
    textStyle ?: any,
    style ?:any,
    onPress?: Function
}

export default class FooterLoad extends Component<Props> {
    static defaultProps = {
        text:"loading",
        onPress:null,
        spinner:null
    }

    constructor(props) {
        super(props);
    }

    renderSpinner = () => {
        const { spinner } = this.props;

        return (spinner === 'default') ? <Spinner 
            size="small"
            style={styles.spinner}
            color={BaseColor.skayBlue}
        /> : spinner;
    }

    renderText = () => {
        const { onPress,textStyle,text } = this.props;

        return (onPress) ?
        <LinkBar
            title={text}
            transparent
            onPress={onPress}
            btnStyle={styles.btn}
            titleStyle={[styles.textStyle,textStyle]}
        />: 
        <Text style={[styles.textStyle,textStyle]}>{text}</Text>;
    }

    render() {
        return (
            <View style={[styles.View,this.props.style]}>
                {this.renderSpinner()}
                {this.renderText()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View:{
        flexDirection:"row",
        justifyContent:"center",
    },
    btn:{
        height:35
    },
    textStyle:{
        fontSize:FONT_SIZE(14),
        alignSelf:"center",
        paddingLeft:10,
        color:BaseColor.skayBlue
    },
    spinner:{
        height:35
    }
})