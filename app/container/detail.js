import React, { Component } from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class Detail extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Detail screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="go back" onPress={()=>this.props.navigation.goBack()} />
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