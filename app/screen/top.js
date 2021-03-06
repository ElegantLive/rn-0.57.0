// 顶级路由配置
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Detail from '../container/Detail';
import MainRoute from './main';
import Login from '../container/auth/Login';
import Register from '../container/auth/Register';
import FindPwd from '../container/auth/FindPwd';
import UpdatePwd from '../container/auth/UpdatePwd';
import Test from '../container/Test';
import Drawer from '../container/Drawer';
import PictureDetail from '../container/PictureDetail';
import { screenTranslate } from '../utils/animate';

const DrawerRoute = createDrawerNavigator({
	MainRoute: MainRoute
}, {
	initialRouteName: 'MainRoute',
	drawerPosition: 'left',
	contentComponent: Drawer,
	navigationOptions: {
		header: null
	}
});

export default AppRoute = createStackNavigator({
	DrawerRoute: DrawerRoute,
	Detail: Detail,
	Login: Login,
	Register: Register,
	Test: Test,
	FindPwd: FindPwd,
	UpdatePwd: UpdatePwd,
	PictureDetail: PictureDetail,
}, {
	initialRouteName: 'DrawerRoute',
	// in react-navigation v3, use `defaultNavigationOptions` to replace `navigationOptions`
	defaultNavigationOptions: {
		header: null,
	},
	transitionConfig: screenTranslate
});