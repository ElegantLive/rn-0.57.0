// 用户权限相关的路由-注册登录
import { createStackNavigator } from 'react-navigation';
import Login from '../container/auth/login';
import Register from '../container/auth/register';

export default AuthRouter = createStackNavigator({
    Login:Login,
    Register:Register
},{
    initialRouteName:'Login'
});