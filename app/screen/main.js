// 用户进入的首页路由配置
import React from 'react';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { Theme } from 'teaset';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../container/home';
import User from '../container/user';
import Shop from '../container/shop';
import Message from '../container/message';
import Icon from 'react-native-vector-icons/FontAwesome';

// const TabOptions = (tabBarTitle, tabBarIconName,tintColor) => {
// 	const title = tabBarTitle;
// 	const tabBarIcon = (){
//         return  <Icon name={tabBarIconName} size={24} color={tintColor}/>
//     }
//     const tabBarVisible = true;
// 	return { title, tabBarVisible, tabBarIcon };
// };

const MainRoute = createBottomTabNavigator({
    Home:{
        screen :Home,
        navigationOptions:  {
            title:"首页",
            tabBarIcon: ({tintColor}) => (<Icon name='home' size={24} color={tintColor}/>),
            // tabBarColor:"orange"
        },
    },
    Shop:{
        screen :Shop,
        navigationOptions: {
            title:"商城",
            tabBarIcon: ({tintColor}) => (<Icon name='shopping-cart' size={24} color={tintColor}/>),
            // tabBarColor:"red"
        },
    },
    Message:{
        screen :Message,
        navigationOptions: {
            title:"消息",
            tabBarIcon: ({tintColor}) => (<Icon name='envelope' size={24} color={tintColor}/>),
            // tabBarColor:Theme.tabBarColor
        },
    },
    User:{
        screen :User,
        navigationOptions: {
            title:"我的",
            tabBarIcon: ({tintColor}) => (<Icon name='user' size={24} color={tintColor}/>),
            // tabBarColor:Theme.activeBackgroundColor
        },
    }
},{
    order:['Home','Shop','Message','User'], /** 定义tabbar的顺序 */
    initialRouteName:"Home", /** 定义初始组件 */
    backBehavior:'none',
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        activeTintColor:'#007aff',
        inactiveTintColor:'#999',
        // activeBackgroundColor:Theme.activeBackgroundColor,
        // inactiveBackgroundColor:Theme.inactiveBackgroundColor,
        showLabel:true,
        showIcon:true,
        // tabStyle :{ backgroundColor : "orange"},
    },
    // tabStyle :{ backgroundColor : "#007aff"},
    // activeColor: '#007aff',
    // inactiveColor: '#f0edf6',
    // barStyle: { backgroundColor: 'white' },
});

/** 用自定义的header标题栏 */
MainRoute.navigationOptions = { header : null};

export default MainRoute;