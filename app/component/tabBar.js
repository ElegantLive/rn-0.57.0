import React, { Component } from 'react';
import { View,Label} from 'react-native';
import { NavigationBar } from 'teaset';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {Ic} from 'teaset/icons';

export default class TabBar extends Component {
    render() {
        return (
            <NavigationBar
                style={{backgroundColor: '#eff'}}
                type='ios'
                tintColor='#333'
                title={
                    <View style={{flex: 1, paddingLeft: 4, paddingRight: 4, alignItems: 'center'}}>
                        <Label style={{color: '#000', fontSize: 15}} text='Teaset' />
                        <Label style={{color: '#333', fontSize: 11}} text='Secondary title' />
                    </View>
                }
                leftView={<NavigationBar.IconButton icon={require("../resouces/girl.png")} />}
                rightView={
                    <View style={{flexDirection: 'row'}}>
                        <NavigationBar.IconButton icon={require("../resouces/boy.png")} />
                        <NavigationBar.IconButton icon={require("../resouces/girl.png")} />
                    </View>
                }
            />
        )
    }
}