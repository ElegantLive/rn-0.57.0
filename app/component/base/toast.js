import React, {Component} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import RootSiblings from 'react-native-root-siblings'
import Icon from 'react-native-vector-icons/FontAwesome'

let sibling = undefined;

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const WARING = 'WARING';

const createSiblings = (msg,type) => {
    const iconType = renderType(type);

    return new RootSiblings(
        <View style={styles.maskStyle}>
            <View style={styles.backViewStyle}>
                <Icon name={iconType.name} size={50} color={iconType.color}/>
                {/* <Text style={[styles.message,{color:iconType.color}]}>{msg}</Text> */}
                <Text style={styles.message}>{msg}</Text>
            </View>
        </View>
    )
}

const renderType = (type) => {
    switch (type) {
        case SUCCESS: 
            return {
                name:'check',
                color:BaseColor.brandSuccess
            };

        case WARING: 
            return {
                name:'warning',
                color:BaseColor.brandWarning
            };

        case ERROR:
            return {
                name:'close',
                color:BaseColor.brandDanger
            };
    }
}

const Toast = {
    showSuccess: (msg,callBack = false) => {
        sibling = createSiblings(msg,SUCCESS);

        setTimeout(() => {
            Toast.hidden();

            (typeof callBack === 'function') ? callBack && callBack(): null
        }, 2000)
    },
    showWaring: (msg,callBack = false) => {
        sibling = createSiblings(msg,WARING);
        
        setTimeout(() => {
            Toast.hidden();

            (typeof callBack === 'function') ? callBack && callBack(): null
        }, 2000)
    },
    showError: (msg,callBack = false) => {
        sibling = createSiblings(msg,ERROR);
        
        setTimeout(() => {
            Toast.hidden();

            (typeof callBack === 'function') ? callBack && callBack(): null
        }, 2000)
    },

    hidden: () => {
        if (sibling instanceof RootSiblings) sibling.destroy()
    }
}

const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backViewStyle: {
        backgroundColor: "#fff",
        width: px2dp(400),
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        bottom:px2dp(100)
    },
    message: {
        color: '#000',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 20,
    }
})

export {Toast}