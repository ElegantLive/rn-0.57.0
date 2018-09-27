import React, { Component } from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class Shop extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Shop screen</Text>
                <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} />
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