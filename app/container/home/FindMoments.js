import React, { Component } from 'react';
import {Button,View,Text,StyleSheet,SafeAreaView,ScrollView,FlatList,RefreshControl} from 'react-native';
// import { Content,Card,CardItem,Icon,Body,Left,Right,Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';
import RefreshLoadList from '../../component/base/RefreshLoadList';
import { forbidRefreshLoadType,refreshLoadType } from '../../redux/actionType';
import NoticeView from '../../component/profession/NoticeView';

const {FAILURE,NORMAL,LOADING,EMPTY,NONE} = refreshLoadType;

@withNavigation
export default class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Juli1e'},
            ],
            refreshing:false,
            loaddata:NORMAL
        }
    }

    componentDidMount () {
        // fix for the refreshing is up refreshing too fast
        setTimeout(() => {
            this.getRefreshData();
        }, 100);
    }

    getLoadData = () => {
        if (this.state.loaddata in forbidRefreshLoadType) return false;

        this.setState({
            loaddata:LOADING
        },()=>setTimeout(() => {
            const nextData = [
                {key: `Devin${Math.random()}`},
                {key: `ackson1${Math.random()}`},
                {key: `James1${Math.random()}`},
                {key: `Joel1${Math.random()}`},
                {key: `John1${Math.random()}`},
                {key: `Jillian1${Math.random()}`},
                {key: `Juli1e1${Math.random()}`},
                {key: `Jimmy1${Math.random()}`}
            ];

            this.setState({
                data:[...this.state.data,...nextData],
                loaddata:NORMAL
            })
        }, 4000))
    }

    getRefreshData = () => {
        if (this.state.refreshing === true) return false;

        this.setState({
            refreshing:true,
        },()=>{
            setTimeout(() => {
            const nextData = [
                {key: `Devin${Math.random()}`},
                {key: `ackson1${Math.random()}`},
                {key: `James1${Math.random()}`},
                {key: `Joel1${Math.random()}`},
                {key: `John1${Math.random()}`},
                {key: `Jillian1${Math.random()}`},
                {key: `Juli1e1${Math.random()}`},
                {key: `Jimmy1${Math.random()}`},
            ];

            this.setState({
                data:nextData,
                refreshing:false
            })
        }, 4000)})
    }

    render(){
        const {data,refreshing,loaddata} = this.state;

        return (
            <RefreshLoadList
                loadData={this.getLoadData}
                refreshData={this.getRefreshData}
                loadType={loaddata}
                refreshing={refreshing}
                data={data}
                listComponent={({item}) => {
                    return <View style={{height:300}}><Text>{item.key}</Text></View>
                }}
                emptyComponent={<NoticeView onClickRefresh={this.getRefreshData}/>}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});