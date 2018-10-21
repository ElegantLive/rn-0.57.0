import React, { PureComponent } from 'react';
import {Button,View,Text,StyleSheet,SafeAreaView,ScrollView,FlatList,RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import FooterLoad from './footerLoad';

// import { Content,Card,CardItem,Icon,Body,Left,Right,Thumbnail } from 'native-base';

// all of forbid loaddata type
const forbidType = {
    none:'none', // 已经加载所有数据
    empty:"empty", // 数据为空
    loading:'loading',// 正在加载
}

const loadType = {
    failure:'failure',// 加载失败
    normal:'normal', // 正常
    ...forbidType
}

type Props = {
    data : Array,
    loadType?: "none" | "empty" | "loading" | "normal" | "failure",
    style?: any,

    footerEmptyText?:string, // 数据为空时底部text
    footerNormalText?:string, // 正常状态底部text
    footerFailureText?:string, // 加载失败时底部text
    footerLoadingText?:string, // 正在加载数据时底部text
    footerNoneText?:string, // 数据已经全部加载底部text
}

export default class RefreshList extends PureComponent <Props> {
    static propTypes = {
        data:PropTypes.array.isRequired,
    }

    static defaultProps = {
        footerEmptyText:'空空如也~_~',
        footerNormalText:'加载更多数据',
        footerFailureText:'居然加载失败了╭(╯^╰)╮',
        footerLoadingText:'正在加载...',
        footerNoneText:'已经加载完了哦！',
    }

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            refreshing: false,
            loaddata: props.loadType
        }
    }

    _refresh = () => {
        this.setState({refreshing: true});

        const stateData = [
        ]

        const data = [...stateData,...this.state.data]

        setTimeout(() => {
            this.setState({data,refreshing: false})
        }, 4000);
    }

    _loadData = () => {
        if (this.state.loaddata in forbidType) return false;
        
        const { continueLoad,request } = this.props;

        if (!continueLoad) return false;

        this.setState({loaddata: loadType.loading},()=>{
            try {
                const response = request();
        
                const {data,loaddata} = this._randerLoadType(response);
        
                this.setState({data:[...this.state.data,...data],loaddata});
            } catch (error) {
                this.setState({loaddata: loadType.failure})
            }
        });
    }

    _randerLoadType = (response) => {
        let loaddata = loadType.normal;

        if (error_code in response) {
            loaddata = loadType.failure;
            return {data:[],loaddata};
        }

        const {data,current_page,has_more} = response;
        if (data === []) {
            loaddata = (current_page > 1) ? loadType.none:loadType.empty;

            return {data,loaddata};
        }

        loaddata = (has_more) ? loadType.normal:loadType.none;

        return {data,loaddata};
    }

    renderFooter = () => {
        const { 
            footerEmptyText,
            footerNormalText,
            footerFailureText,
            footerLoadingText,
            footerNoneText
        } = this.props;

        switch(this.state.loaddata) {
            case loadType.normal:
                return <FooterLoad 
                    spinner={null}
                    text={footerNormalText}
                />;
            case loadType.none:
                return <FooterLoad 
                    spinner={null}
                    text={footerNoneText}
                />;
            case loadType.empty:
                return <FooterLoad 
                    spinner={null}
                    text={footerEmptyText}
                />;
            case loadType.failure:
                return <FooterLoad 
                    spinner={null}
                    text={footerFailureText}
                />;
            case loadType.loading:
                return <FooterLoad 
                    text={footerLoadingText}
                />;
        }
    }

    renderRefresh = () => {
        return <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._refresh}
            tintColor={BaseColor.skayBlue}
            title="loading"
            titleColor={BaseColor.skayBlue}
            enabled={true}
            colors={[
                BaseColor.skayBlue,
                BaseColor.skayGreen,
                BaseColor.skayWarning,
                BaseColor.skayDanger,
            ]}
        />
    }

    renderContent = (dd) => {
        // console.log(dd);

        const { item } = dd;
        return <Text style={{height:100,color:BaseColor.skayDanger}}>{item.key}</Text>
    }

    renderEmpty = () => {
        return <View><Text>none</Text></View>;
    }

    renderHeader = () => {
        return <View><Text>header</Text></View>;
    }

    render(){
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderContent}
                refreshControl={this.renderRefresh()}
                ListEmptyComponent={this.renderEmpty()}
                ListFooterComponent={this.renderFooter()}
                ListHeaderComponent={this.renderHeader()}
                onEndReached={this._loadData}
                onEndReachedThreshold={0.4}
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