import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View,TextInput,StyleSheet,Button,Text,Dimensions} from 'react-native';
import { Container,Tabs,Tab } from 'native-base';
import NavBar from '../component/base/navBar';
// import TabBar from '../component/base/tabBar';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {initName,reName} from '../redux/user';
import defaultUpdate from '../utils/diyShouldComponentDidUpdate';


const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

@connect(
    state => state.user,
    { initName,reName }
)

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name || "",
            root:this.props.root || false,
            index: 1,
            routes: [
                { key: 'first', title: 'First' },
                { key: 'second', title: 'Second' },
            ],
        }
    }

    handleChange = name => {
        this.setState({name});
    }

    reName = () => {
        this.props.reName(this.state);
    }

    shouldComponentUpdate(newProps, newState){
        return defaultUpdate(newProps,newState,this);
    }

    componentWillUpdate(){
        console.log('updating')
    }
    
    initName = () => {
        this.props.reName({...this.state,name:'init'});
    }

    initNameAsync = async () => {
        await this.props.initName('init');
    }

    render() {
        return (
            <Container>
                <NavBar 
                    left="drawer"
                    headerTitle='首页'
                />
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width,height: Dimensions.get('window').height }}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBar:{
        backgroundColor:BaseColor.skyBlue
    }
});