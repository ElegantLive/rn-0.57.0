import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Find from '../container/home/findMoments';
import New from '../container/home/newMoments';

const HomeRoute = createMaterialTopTabNavigator({
    New:{
        screen :New,
        navigationOptions:  {
            title:"最新",
            //  以下四项和最后四项二选一，一个相对于自己一个相对于全部

            // tabBarColor:BaseColor.diytabDefaultBg,
            // activeBackgroundColor:BaseColor.diytabDefaultBg,
            // activeColor:BaseColor.skayBlue,
            // inactiveColor:BaseColor.GrayBG,
        },
    },
    Find:{
        screen :Find,
        navigationOptions: {
            title:"发现",
            // tabBarColor:BaseColor.diytabDefaultBg,
            // activeBackgroundColor:BaseColor.diytabDefaultBg,
            // activeColor:BaseColor.skayBlue,
            // inactiveColor:BaseColor.GrayBG,
        },
    },
    // Find:{
    //     screen :Find,
    //     navigationOptions: {
    //         title:"发现",
    //         // tabBarColor:BaseColor.diytabDefaultBg,
    //         // activeBackgroundColor:BaseColor.diytabDefaultBg,
    //         // activeColor:BaseColor.skayBlue,
    //         // inactiveColor:BaseColor.GrayBG,
    //     },
    // },
    // Find1:{
    //     screen :Find,
    //     navigationOptions: {
    //         title:"发现",
    //         // tabBarColor:BaseColor.diytabDefaultBg,
    //         // activeBackgroundColor:BaseColor.diytabDefaultBg,
    //         // activeColor:BaseColor.skayBlue,
    //         // inactiveColor:BaseColor.GrayBG,
    //     },
    // },
    // Find2:{
    //     screen :Find,
    //     navigationOptions: {
    //         title:"发现",
    //         // tabBarColor:BaseColor.diytabDefaultBg,
    //         // activeBackgroundColor:BaseColor.diytabDefaultBg,
    //         // activeColor:BaseColor.skayBlue,
    //         // inactiveColor:BaseColor.GrayBG,
    //     },
    // },
    // Find3:{
    //     screen :Find,
    //     navigationOptions: {
    //         title:"发现",
    //         // tabBarColor:BaseColor.diytabDefaultBg,
    //         // activeBackgroundColor:BaseColor.diytabDefaultBg,
    //         // activeColor:BaseColor.skayBlue,
    //         // inactiveColor:BaseColor.GrayBG,
    //     },
    // },
},{
    order:['New','Find'], /** 定义tabbar的顺序 */
    initialRouteName:"New", /** 定义初始组件 */
    backBehavior:'none',
    swipeEnabled:true,
    animationEnabled:true,
    tabBarOptions:{
        // activeTintColor:'#007aff', // 活动选项卡的标签和图标颜色。
        // inactiveTintColor:'#000', // "非活动" 选项卡的标签和图标颜色。
        // pressOpacity:0.3, // 按下标签时的不透明度
        // showLabel:true,
        // showIcon:false,
        // tabStyle:{ backgroundColor : BaseColor.diytabDefaultBg},
        // activeBackgroundColor:BaseColor.diytabDefaultBg,
        // inactiveBackgroundColor:BaseColor.diytabDefaultBg,
        // activeColor: '#007aff',
    },
    // activeBackgroundColor:BaseColor.diytabDefaultBg,
    // inactiveBackgroundColor:BaseColor.diytabDefaultBg,
    // tabStyle:{}
});

export default HomeRoute;