import {
	NavigationActions,
	DrawerActions
} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function getTopLevelNavigator() {
	return _navigator | null;
}

/**
 * 路由跳转
 * @param {string} routeName 路由的key
 * @param {object} params 携带的参数
 */
function navigate(routeName, params = null) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}

/**
 * 返回上一层路由
 * @param {string} routeName 路由的key
 * @param {object} params 携带的参数
 */
function back(routeName, params = null) {
	_navigator.dispatch(
		NavigationActions.back({
			routeName,
			params,
		})
	);
}

/**
 * open drawer
 */
function drawer() {
	_navigator.dispatch(
		DrawerActions.openDrawer()
	);
}

export default {
	setTopLevelNavigator,
	getTopLevelNavigator,
	navigate,
	back,
	drawer
};