import React, { Component } from 'react';
import {Button,View,Text,StyleSheet,SafeAreaView} from 'react-native';
import { withNavigation } from 'react-navigation';

@withNavigation
export default class Find extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text>Find screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="go back" onPress={()=>this.props.navigation.goBack()} />
                <Button title="go to login" onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title="asnycInit" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});