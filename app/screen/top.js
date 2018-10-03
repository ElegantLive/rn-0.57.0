// 顶级路由配置
import { createStackNavigator } from 'react-navigation';
import Detail from '../container/detail';
import MainRoute from './main';
import Login from '../container/auth/login';
import Register from '../container/auth/register';
import Test from '../container/test';

export default AppRouter = createStackNavigator({
    MainRoute:MainRoute,
    Detail:Detail,
    Login:Login,
    Register:Register,
    Test:Test
},{
    initialRouteName:"MainRoute"
});