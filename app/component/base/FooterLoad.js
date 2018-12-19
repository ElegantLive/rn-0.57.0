import React, { PureComponent } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import LinkBar from './LinkBar';

type Props = {
    spinner ?: 'default' | Spinner, // 设置为null来隐藏/使用default来使用默认/使用spinner自定义
    text ?: string | Text,
    textStyle ?: any,
    style ?:any,
    onPress?: Function
}

export default class FooterLoad extends PureComponent <Props> {
    static defaultProps = {
        text:"loading",
        onPress:null,
        spinner:null
    };

    constructor(props) {
        super(props);
        this.renderSpinner = this.renderSpinner.bind(this);
        this.renderText = this.renderText.bind(this);
    }

    renderSpinner() {
        const { spinner } = this.props;

        return (spinner === 'default') ? <Spinner 
            size="small"
            style={styles.height}
            color={BaseColor.skayBlue}
        /> : spinner;
    }

    renderText() {
        const { onPress,textStyle,text } = this.props;

        return (onPress) ?
        <LinkBar
            title={text}
            transparent
            onPress={onPress}
            btnStyle={styles.height}
            titleStyle={[styles.textStyle,textStyle]}
        />: 
        <Text style={[styles.textStyle,textStyle]}>{text}</Text>;
    }

    render() {
        return (
            <View style={[styles.View,styles.height,this.props.style]}>
                {this.renderSpinner()}
                {this.renderText()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View:{
        flexDirection:"row",
        justifyContent:"center"
    },
    textStyle:{
        fontSize:FONT_SIZE(14),
        alignSelf:"center",
        paddingLeft:10,
        color:BaseColor.skayBlue
    },
    height:{
        height:35
    }
});