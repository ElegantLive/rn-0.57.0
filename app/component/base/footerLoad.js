import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { baseColor } from '../../utils/system/themeSet';

type Props = {
    spinner ?: any,
    text ?: any,
    textStyle ?: any,
    style ?:any
}

export default class FooterLoad extends Component<Props> {
    static defaultProps = {
        text:"loading",
    }

    constructor(props) {
        super(props);
    }

    renderSpinner = () => {
        const { spinner } = this.props;

        return (spinner) ? spinner: <Spinner 
            size="small"
            style={styles.spinner}
        />;
    }

    render() {
        return (
            <View style={[styles.View,this.props.style]}>
                {this.renderSpinner()}
                <Text style={[styles.textStyle,this.props.textStyle]}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View:{
        flexDirection:"row",
        justifyContent:"center",
        // backgroundColor:baseColor.diytabDefaultBg
    },
    textStyle:{
        fontSize:FONT_SIZE(14),
        alignSelf:"center",
        paddingLeft:10
    },
    spinner:{
        height:30
    }
})