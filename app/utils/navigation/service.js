import {
    NavigationActions
} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function back(routeName, params) {
    _navigator.dispatch(
        NavigationActions.back({
            routeName,
            params,
        })
    );
}

export default {
    navigate,
    setTopLevelNavigator,
    back
};