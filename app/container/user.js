import React, { Component } from 'react';
import {connect} from 'react-redux';
import { login,logout,info } from '../redux/user';
import {Button,View,Text,StyleSheet} from 'react-native';

@connect(
    state => state.user,
    { login,logout,info }
)

export default class User extends Component{
    login = () => {
        this.props.login(13263995262,123456);
    }

    logout = () => {
        console.log('logout');
        this.props.logout();
    }

    info = () => {
        console.log('info');
        this.props.info();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>User screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="login" onPress={this.login} />
                <Button title="logout" onPress={this.logout} />
                <Button title="get info" onPress={this.info} />
                <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
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