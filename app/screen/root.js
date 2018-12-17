// 入口路由配置
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
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