import React, { Component } from 'react';
import { Text,StyleSheet,Button,ScrollView,SafeAreaView } from 'react-native';
import { Drawer as DraserBase } from 'native-base';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Button title="go back" onPress={()=>this.props.navigation.goBack()} />
                    <Button title="go login" onPress={()=>this.props.navigation.navigate('Login')} />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});