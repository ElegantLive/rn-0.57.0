import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View,TextInput,StyleSheet,Button,Text} from 'react-native';
import {initName,reName} from '../redux/name';
import defaultUpdate from '../utils/diyShouldComponentDidUpdate';

@connect(
    state => state.name,
    { initName,reName }
)

export default class Home extends Component{
    static navigationOptions = {
        title: 'home',
      };

    constructor(props){
        super(props);
        this.state = {
            name:this.props.name || "",
            root:this.props.root || false
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
        this.props.reName({...this.state,name:'init'});
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
                <Button title="go back" onPress={()=>this.props.navigation.goBack()} />
                <Button title="go login" onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title="go popToTop" onPress={()=>this.props.navigation.popToTop()} />
                <Text>{this.state.name} home screen</Text>
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