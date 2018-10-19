// 顶级路由配置
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import Detail from '../container/detail';
import MainRoute from './main';
import Login from '../container/auth/login';
import Register from '../container/auth/register';
import FindPwd from '../container/auth/findPwd';
import UpdatePwd from '../container/auth/updatePwd';
import Test from '../container/test';
import Drawer from '../container/drawer';

const DrawerRouter = createDrawerNavigator({
    MainRoute:MainRoute
},{
    initialRouteName: 'MainRoute',
    drawerPosition: 'left',
    contentComponent: Drawer,
    navigationOptions:{
        header:null
    }
})

export default AppRouter = createStackNavigator({
    DrawerRouter:DrawerRouter,
    Detail:Detail,
    Login:Login,
    Register:Register,
    Test:Test,
    FindPwd:FindPwd,
    UpdatePwd:UpdatePwd
},{
    initialRouteName:"DrawerRouter",
    navigationOptions:{
        header:null,
    }
});