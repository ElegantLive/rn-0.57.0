// 顶级路由配置
import { createStackNavigator } from 'react-navigation';
import Detail from '../container/detail';
import MainRoute from './main';

export default AppRouter = createStackNavigator({
    MainRoute:MainRoute,
    Detail:Detail
},{
    initialRouteName:"MainRoute"
});