import React, { Component } from 'react';
import { Text,TextInput,StyleSheet,Button,ScrollView,SafeAreaView } from 'react-native';
import { Drawer as DraserBase } from 'native-base';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                 {/* <TextInput
                    placeholder="Choose a Username"
                    onChangeText={this.handleChange}
                    value={this.state.name}
                />
                <Button title="Submit" onPress={this.reName} />
                <Button title="Init" onPress={this.initName} />
                <Button title="asnycInit" onPress={this.initNameAsync} /> */}
                <Button title="go back" onPress={()=>this.props.navigation.goBack()} />
                <Button title="go Detail" onPress={()=>this.props.navigation.navigate('Detail')} />
                <Button title="go Test" onPress={()=>this.props.navigation.navigate('Test')} />
                <Button title="go login" onPress={()=>this.props.navigation.navigate('Login')} />
                <Button title="go Register" onPress={()=>this.props.navigation.navigate('Register')} />
                <Button title="keep development" onPress={()=>console.log('keep development')} />
                </SafeAreaView>
            </ScrollView>
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