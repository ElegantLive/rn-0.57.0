// 顶级路由配置
import { createStackNavigator } from 'react-navigation';
import Detail from '../container/detail';
import MainRoute from './main';
import Login from '../container/auth/login';
import Register from '../container/auth/register';

export default AppRouter = createStackNavigator({
    MainRoute:MainRoute,
    Detail:Detail,
    Login:Login,
    Register:Register
},{
    initialRouteName:"MainRoute"
});