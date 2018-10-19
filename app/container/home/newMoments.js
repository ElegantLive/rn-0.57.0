import React, { Component } from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

@withNavigation
export default class New extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>New screen</Text>
                <Button title="go to Login" onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title="jump to find" onPress={()=>this.props.jumpTo('find')} />
                <Button title="asnycInit" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
            </View>
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