import React, { Component } from 'react';
import { createStackNavigator,createBottomTabNavigator } from  'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../container/login';
import Home from '../container/home';
import Detail from '../container/detail';

// const AppStackNavigator = createStackNavigator({
//     Login,
//     Home
// })

const AppStackNavigator = createBottomTabNavigator({
    Login:{
        screen: Login,
        navigationOptions:{
            tabBarLabel:'Login',
            tabBarIcon:({tintColor})=>(
                <Icon name='wechat' color={tintColor} size={24} />
            )
        }
    },
    Detail:{
        screen: Detail,
        navigationOptions:{
            tabBarLabel:'Detail',
            tabBarIcon:({tintColor})=>(
                <Icon name='facebook' color={tintColor} size={24} />
            )
        }
    },
    // Home:{
    //     screen: Home,
    //     navigationOptions:{
    //         tabBarVisible:false,
    //         tabBarLabel:'Home',
    //         tabBarIcon:({tintColor})=>(
    //             <Icon name='facebook' color={tintColor} size={24} />
    //         )
    //     }
    // }
},{
    initialRouteName:"Detail",
    order:['Detail','Login'],
    navigationOptions:{
        tabBarVisible:true
    },
    tabBarOptions:{
        activeTintColor:'blue',
        inactiveTintColor:'grey'
    }
})

export default class App extends Component{
    render(){
        return (
            <AppStackNavigator />
        )
    }
}