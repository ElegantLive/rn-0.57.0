import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View,TextInput,StyleSheet,Button,Text} from 'react-native';
import {initName,reName} from '../redux/name';
import defaultUpdate from '../utils/diyShouldComponentDidUpdate';

@connect(
    state => state.name,
    { initName,reName }
)

export default class Root extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name || ""
        }
    }

    handleChange = name => {
        this.setState({name});
    }

    reName = () => {
        this.props.reName(this.state);
    }

    shouldComponentUpdate(newProps, newState){
        return defaultUpdate(newProps,newState,this);
    }

    componentWillUpdate(){
        console.log('updating')
    }
    
    initName = () => {
        this.setState({name:'init'});
        this.props.reName(this.state);
    }

    initNameAsync = async () => {
        await this.props.initName('init');
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Choose a Username"
                    onChangeText={this.handleChange}
                    value={this.state.name}
                />
                <Button title="Submit" onPress={this.reName} />
                <Button title="Init" onPress={this.initName} />
                <Button title="asnycInit" onPress={this.initNameAsync} />
                <Text>{this.state.name}</Text>
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