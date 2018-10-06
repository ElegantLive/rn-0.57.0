// 入口路由配置
import { createSwitchNavigator } from 'react-navigation';
import Init from '../container/init';
import AppRouter from './top';

export default RootRouter = createSwitchNavigator({
    Init:Init,
    AppRouter:AppRouter,
},{
    initialRouteName:"Init"
});