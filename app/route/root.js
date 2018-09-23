import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View,TextInput,StyleSheet,Button} from 'react-native';
import {initName,rename} from '../redux/name';

class Root extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name
        }
    }

    handleChange = name => {
        this.setState({name});
    }

    reName = () => {
        this.props.rename(this.state);
    }

    shouldComponentUpdate(newProps, newState){
        console.log(
            'rendering',
            newProps,
            newState,
            (newState !== this.state),
            (newProps.name !== this.props.name)
        );
        return true;
    }

    componentWillUpdate(){
        console.log('updating')
    }

    initName = async () => {
        await this.props.initName('init');
        // if (res) this.setState({name:'init'})
    }
    // initName = () => {
    //     console.log('init');
    //     this.props.initName('init');
    // }
    
    render(){
        console.log(this.state,this.props);
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Choose a Username"
                    onChangeText={this.handleChange}
                    value={this.state.name}
                />
                <Button title="Submit" onPress={this.reName} />
                <Button title="Init" onPress={this.initName} />
            </View>
        )
    }
}
function mapStatetoProps(store){
    console.log(store);
    return {
        name: store.name.name,
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
  

export default connect(mapStatetoProps,{initName,rename})(Root);