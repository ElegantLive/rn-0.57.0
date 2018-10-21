import React, { Component } from 'react';
import {Button,View,Text,StyleSheet,SafeAreaView,ScrollView,FlatList,RefreshControl} from 'react-native';
// import { Content,Card,CardItem,Icon,Body,Left,Right,Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';
import RefreshList from '../../component/base/refreshList';
import FooterLoad from '../../component/base/footerLoad';

@withNavigation
export default class Find extends Component {
    render(){
        return (
            // <FooterLoad 
            //             text="正在加载中..."
            //             // onPress={()=>{console.log('onpress')}}
            //         />
            <View>
                <RefreshList 
                    data = {[
                        // {key: 'Devin'},
                        // {key: 'Jackson'},
                        // {key: 'James'},
                        // {key: 'Joel'},
                        // {key: 'John'},
                        // {key: 'Jillian'},
                        // {key: 'Jimmy'},
                        // {key: 'Juli1e'},
                    ]}
                    loadType="empty"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});