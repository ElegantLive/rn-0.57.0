import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator } from  'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../container/login';
import Home from '../container/home';
import Shop from '../container/shop';
import Message from '../container/message';
import User from '../container/user';
// import Detail from '../container/detail';

// const AppStackNavigator = createStackNavigator({
//     Login,
//     Home
// })

// const AppStackNavigator = createBottomTabNavigator({
//     Login:{
//         screen: Login,
//         navigationOptions:{
//             tabBarLabel:'Login',
//             tabBarIcon:({tintColor})=>(
//                 <Icon name='wechat' color={tintColor} size={24} />
//             )
//         }
//     },
//     Detail:{
//         screen: Detail,
//         navigationOptions:{
//             tabBarLabel:'Detail',
//             tabBarIcon:({tintColor})=>(
//                 <Icon name='facebook' color={tintColor} size={24} />
//             )
//         }
//     },
//     // Home:{
//     //     screen: Home,
//     //     navigationOptions:{
//     //         tabBarVisible:false,
//     //         tabBarLabel:'Home',
//     //         tabBarIcon:({tintColor})=>(
//     //             <Icon name='facebook' color={tintColor} size={24} />
//     //         )
//     //     }
//     // }
// },{
//     initialRouteName:"Detail",
//     order:['Detail','Login'],
//     navigationOptions:{
//         tabBarVisible:true
//     },
//     tabBarOptions:{
//         activeTintColor:'blue',
//         inactiveTintColor:'grey'
//     }
// })

const AppStackNavigator = createMaterialTopTabNavigator({
    Home: {
        screen : Home,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(<Icon color={tintColor} name='home' size={24} />)
        }
    },
    User: {
        screen : User,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(<Icon color={tintColor} name='user' size={24} />)
        }
    },
    Shop: {
        screen : Shop,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(<Icon color={tintColor} name='shopping-cart' size={24} />)
        }
    },
    Message: {
        screen : Login,
        navigationOptions:{
            tabBarIcon:({tintColor})=>(<Icon color={tintColor} name='envelope' size={24} />)
        }
    }
},{
    initialRouteName:"Home",
    order:['Home','Shop','Message','User'],
    navigationOptions:{
        tabBarVisible:true
    },
    style:{

    },
    // activeTintColor:'blue',
    // inactiveTintColor:'red',
    // showIcon: true,
    // barStyle: { backgroundColor: 'red' },
    tabBarPosition:"top",/** 定位方式-botton/top */
    swipeEnabled: true,/** 是否允许左右滑动 */
    animationEnabled:true,/** 切换菜单是否允许滑动跳跃 */
    tabBarOptions:{
        activeTintColor:'orange',
        showIcon:true
    }
})

export default class App extends Component{
    render(){
        return (
            <SafeAreaView style={{flex : 1}}>
                <AppStackNavigator />
            </SafeAreaView>
        )
    }
}