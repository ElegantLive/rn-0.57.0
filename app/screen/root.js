// 入口路由配置
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import Init from '../container/Init';
import AppRouter from './top';

export default RootRouter = createAppContainer(
	createSwitchNavigator({
		Init: Init,
		AppRouter: AppRouter,
	}, {
		initialRouteName: 'Init'
	}),
);