import React, { Component } from 'react';
import {connect} from 'react-redux';
import { logout } from '../redux/token';
import { info } from '../redux/user';
import {Button,View,Text,StyleSheet,ScrollView} from 'react-native';
import { Container } from 'native-base';
import NavBar from '../component/base/navBar';

@connect(
    state => state.user,
    { logout,info }
)

export default class User extends Component{
    login = () => {
        this.props.navigation.navigate('Login');
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
            <Container>
                <NavBar 
                    left="drawer"
                    headerTitle='我的'
                />
                <ScrollView style={styles.container}>
                    <Text>User screen</Text>
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                    <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                    <Button title="go to updatepwd" onPress={()=>this.props.navigation.navigate('UpdatePwd')} />
                    <Button title="login" onPress={this.login} />
                    <Button title="logout" onPress={this.logout} />
                    <Button title="get info" onPress={this.info} />
                    <Button title="test" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} />
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
});