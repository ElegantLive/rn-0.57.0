import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View } from 'native-base';
import NavBar from '../../component/base/NavBar';
import {initName,reName} from '../../redux/user';
import defaultUpdate from '../../utils/system/diyShouldComponentDidUpdate';
import TopTab from '../../component/base/TopTab';
import New from './NewMoments';
import Find from './FindMoments';
import backHandler from '../../component/higher/backHandler';

@connect(
    state => state.user,
    { initName,reName }
)

@backHandler
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:props.name,
            root:props.root,
        }
    }

    handleChange = name => {
        this.setState({name});
    }

    reName = () => {
        this.props.reName(this.state);
    }
     
    componentDidMount() {

    }

    shouldComponentUpdate(newProps, newState){
        return defaultUpdate(newProps,newState,this);
    }

    componentWillUpdate(){
        console.log('will update')
    }
    
    initName = () => {
        this.props.reName({...this.state,name:'init'});
    }

    initNameAsync = async () => {
        await this.props.initName('init');
    }

    render() {
        const titles = {
            index: 0,
            routes: [
                { key: 'new', title: '最新' },
                { key: 'find', title: '发现' },
            ]
        }

        const routes = {
            new: New,
            find: Find,
        }

        return (
            <Container>
                <NavBar
                    left="drawer"
                    headerTitle='首页'
                />
                <TopTab
                    titles={titles}
                    routes={routes}
                />
            </Container>
        )
    }
}