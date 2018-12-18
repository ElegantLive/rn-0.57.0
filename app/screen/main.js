// 用户进入的首页路由配置
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import User from '../container/User';
import Home from '../container/home';
import Shop from '../container/Shop';
import Message from '../container/Message';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainRoute = createMaterialBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: '首页',
			tabBarIcon: ({tintColor}) => (<Icon name='home' size={24} color={tintColor}/>),
			//  以下四项和最后四项二选一，相对于自己/全部

			// tabBarColor:BaseColor.diytabDefaultBg,
			// activeBackgroundColor:BaseColor.diytabDefaultBg,
			// activeColor:BaseColor.skayBlue,
			// inactiveColor:BaseColor.GrayBG,
		},
	},
	Shop: {
		screen: Shop,
		navigationOptions: {
			title: '商城',
			tabBarIcon: ({tintColor}) => (<Icon name='shopping-cart' size={24} color={tintColor}/>),
			// tabBarColor:BaseColor.diytabDefaultBg,
			// activeBackgroundColor:BaseColor.diytabDefaultBg,
			// activeColor:BaseColor.skayBlue,
			// inactiveColor:BaseColor.GrayBG,
		},
	},
	Message: {
		screen: Message,
		navigationOptions: {
			title: '消息',
			tabBarIcon: ({tintColor}) => (<Icon name='envelope' size={24} color={tintColor}/>),
			// tabBarColor:BaseColor.diytabDefaultBg,
			// activeBackgroundColor:BaseColor.diytabDefaultBg,
			// activeColor:BaseColor.skayBlue,
			// inactiveColor:BaseColor.GrayBG,
		},
	},
	User: {
		screen: User,
		navigationOptions: {
			title: '我的',
			tabBarIcon: ({tintColor}) => (<Icon name='user' size={24} color={tintColor}/>),
			// tabBarColor:BaseColor.diytabDefaultBg,
			// activeBackgroundColor:BaseColor.diytabDefaultBg,
			// activeColor:BaseColor.skayBlue,
			// inactiveColor:BaseColor.GrayBG,
		},
	}
}, {
	order: ['Home', 'Shop', 'Message', 'User'], /** 定义tabbar的顺序 */
	initialRouteName: 'Home', /** 定义初始组件 */
	backBehavior: 'none',
	swipeEnabled: true,
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: BaseColor.skayBlue,
		inactiveTintColor: '#999',
		// activeBackgroundColor:Theme.activeBackgroundColor,
		// inactiveBackgroundColor:Theme.inactiveBackgroundColor,
		showLabel: true,
		showIcon: true,
		// tabStyle :{ backgroundColor : "orange"},
	},
	tabStyle: { backgroundColor: BaseColor.skayBlue},
	activeColor: BaseColor.skayBlue,
	inactiveColor: BaseColor.GrayBG,
	barStyle: { backgroundColor: BaseColor.diytabDefaultBg },
});

export default MainRoute;