import React, { Component } from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';
import axios from 'axios';

export default class Message extends Component{
    upload = async () => {
        console.log('upload');
        // axios.upload
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Message screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="upload" onPress={this.upload} />
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