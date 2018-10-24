import React, { PureComponent } from 'react';
import { StyleSheet,Text } from 'react-native';
import PropTypes from 'prop-types';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
// import { Badge,Icon } from 'native-base';

type Props = {
    routes: Object,
    titles: Object,
    // ...TabView.PropTypes
}

// 用浅对比
export default class TopTab extends PureComponent <Props> {
    static propTypes = {
        routes:PropTypes.object,
        titles:PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = props.titles
    }

    _renderLabel = (scene) => {
        const focused = this.state.routes.indexOf(scene.route) === this.state.index;
        return <Text 
            style={[(focused ? styles.activeLabel:null),styles.Text]}
        >
            {scene.route.title}
        </Text>
    }

    _renderTabBar = (props) => {
        return <TabBar 
            {...props}
            indicatorStyle={styles.indicator}  // 选中的选项卡
            tabStyle={styles.tabStyle} // 选项卡
            labelStyle={styles.label} // 选项卡标题
            style={styles.tabBar}
            pressOpacity={0.4} // 按下去变化的透明度
            renderLabel={this._renderLabel}
            // renderBadge={scene=>{
            //     console.log(scene);
            //     return <Badge info><Text>·</Text></Badge>
            // }}
            // renderIcon={scene=>{
            //     console.log(scene);
            //     return <Icon name='facebook' />
            // }}
        />
    }

    render() {
        const layout = { width:SCREEN_WIDTH,height:SCREEN_HEIGHT };

        const scene = SceneMap(this.props.routes);

        return (
            <TabView
                navigationState={this.state}
                renderScene={scene}
                style={styles.tabView}
                onIndexChange={index => this.setState({ index })}
                initialLayout={layout}
                lazy={true}
                renderTabBar={this._renderTabBar}
            />
        )
    }
}

const styles = StyleSheet.create({
    tabView:{
        backgroundColor:BaseColor.diytabDefaultBg,
    },
    tabBar:{
        backgroundColor:BaseColor.diytabDefaultBg,
        height:40
    },
    tabStyle:{
        color:BaseColor.skayBlue,
        height:40
    },
    label:{
        color:"#000"
    },
    activeLabel:{
        color:BaseColor.skayBlue
    },
    indicator:{
        backgroundColor:BaseColor.skayBlue
    },
    Text:{
        // justifyContent:"center"
    }
})