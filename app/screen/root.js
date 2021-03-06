// 入口路由配置
import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import NavigationService from '../utils/navigation/service';
import Init from '../container/Init';
import AppRoute from './top';

const Root = createAppContainer(
	createSwitchNavigator({
		Init: Init,
		AppRoute: AppRoute,
	}, {
		initialRouteName: 'Init'
	}),
);

export default class RootRoute extends React.PureComponent {
	render () {
		return <Root
			ref = {navigationRef => {
				NavigationService.setTopLevelNavigator(navigationRef);
			}}
		/>;
	}
}