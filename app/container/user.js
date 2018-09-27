import React, { Component } from 'react';
import {connect} from 'react-redux';
import {initName,reName} from '../redux/name';
import {Button,View,Text,StyleSheet} from 'react-native';

@connect(
    state => state.name,
    { initName,reName }
)

export default class User extends Component{
    initNameAsync = async () => {
        await this.props.initName('init');
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>User screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="asnycInit" onPress={this.initNameAsync} />
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