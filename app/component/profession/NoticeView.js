import React, { PureComponent } from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import LinkBar from '../base/LinkBar';
import CustomImage from '../base/CustomImage';
import PropTypes from 'prop-types';

type Props = {
    btnStyle?: any,
    titleStyle?: any,
    onClickRefresh?: Function | boolean, // 触发的function,如果不需要这个btn的话把该项设为null或者false
    noticeText?: Text | String, // 提示text
    type?: 'dataEmpty' | "noNetwork", // 数据为空或是没有网络
    width: Number,//宽高
    height: Number,//宽高
    source?: any // 提示image
}

// 定义出错提示-如访问失效的数据-网络连接出错-访问数据为空等等

export default class NoticeView extends PureComponent <Props> {
    static propTypes = {
        onClickRefresh:PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func
        ]),
        noticeText:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
    }

    static defaultProps = {
        type:"dataEmpty",
        onClickRefresh: () => {
            console.log('onclick')
        }
    }

    constructor(props) {
        super(props);
    }

    _renderSourceView = () => {
        let {type,source} = this.props;

        if (!source) source = this._renderSourceByType(type).source;
        
        const noticeImage = <CustomImage source={source} style={styles.pic}/>;

        return (
            <View style={styles.picBlock}>
                {noticeImage}
            </View>
        )
    }

    _renderTextView = () => {
        let {type,noticeText} = this.props;

        if (!noticeText) noticeText = this._renderSourceByType(type).noticeText;

        if (typeof noticeText === "string") noticeText = <Text>{noticeText}</Text>;

        return (
            <View style={styles.textBlock}>
                {noticeText}
            </View>
        )
    }

    _renderSourceByType = (type) => {
        let text;
        let source;

        switch(type) {
            case 'dataEmpty':
                text = '空空如也O__O "…';
                source = require('../../resouces/img/nothing@1.png');
                break;
            case 'noNetwork':
                text = '网络好像不给力(⊙o⊙)';
                source = require('../../resouces/img/nonetwork@1.png');
                break;
        }

        const noticeText = <Text style={styles.text}>{text}</Text>;

        return {noticeText,source};
    }

    render() {
        const { width,height,onClickRefresh } = this.props;
        const sourceView = this._renderSourceView();
        const textView = this._renderTextView();
        let btnView = null;
        if (onClickRefresh) {
            // i think this is a simple resolvetion
            // const onPressRefresh = () => {
            //     setTimeout(() => {
            //         onClickRefresh()
            //     }, 200);
            // };

            btnView = <LinkBar
                title="点我刷新"
                block
                transparent
                onPress={onClickRefresh}
                btnStyle={styles.button}
                titleStyle={styles.buttonText}
            />;
        }

        return (
            <View style={[styles.panel, {
                width: width,
                height: height,
            }]}>
                {sourceView}
                {textView}
                {btnView}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    panel:{
    },
    picBlock:{
        flexDirection:"row",
        justifyContent:"center"
    },
    pic:{
        height:150,
        width:150,
        borderRadius:75,
        marginTop:30,
        marginBottom:20,
    },
    textBlock:{
        marginTop:20,
    },
    text:{
        textAlign:"center"
    },
    button:{
        height:40,
    },
    buttonText:{
        color:BaseColor.skayBlue
    }
})