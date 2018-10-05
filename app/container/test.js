import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
export default class Test extends Component {
    static navigationOptions = {
        header:null
    }

    goRegister = () => {
        this.props.navigation.navigate('Register');
    }

    render() {
        return null
    }
}

const styles = StyleSheet.create({
    rightTitle:{
        fontSize:15
    }
})