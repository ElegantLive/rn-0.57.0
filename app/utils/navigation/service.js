import {
    NavigationActions,
    DrawerActions
} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params = null) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function back(routeName, params = null) {
    _navigator.dispatch(
        NavigationActions.back({
            routeName,
            params,
        })
    );
}

function drawer() {
    _navigator.dispatch(
        DrawerActions.openDrawer()
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    back,
    drawer
};