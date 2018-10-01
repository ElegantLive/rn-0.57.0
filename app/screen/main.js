// 这里是用户进入的首页路由配置
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../container/home';
import User from '../container/user';
import Shop from '../container/shop';
import Message from '../container/message';

export default MainRoute = createMaterialBottomTabNavigator({
    Home:Home,
    Shop:Shop,
    Message:Message,
    User:User
},{
    initialRouteName:"Home"
});