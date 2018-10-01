import React, { Component } from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';
import axios from 'axios';

export default class Register extends Component{
    register = async () => {
        // const user = {mobile:13263995262,password:111111};
        // const res = await axios.post("token/user",user);
        // if (res) console.log(res);
        console.log('register');
    } 

    render(){
        return (
            <View style={styles.container}>
                <Text>register screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="go to login" onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title="register" onPress={this.register} />
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