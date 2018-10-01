// 入口路由配置
import { createSwitchNavigator } from 'react-navigation';
import Init from '../container/init';
import AuthRouter from './auth';
import AppRouter from './top';

export default RootRouter = createSwitchNavigator({
    Init:Init,
    AppRouter:AppRouter,
    AuthRouter:AuthRouter
},{
    initialRouteName:"Init"
});