import React, { PureComponent } from 'react';
import {FlatList,RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import FooterLoad from './FooterLoad';
import {refreshLoadType} from '../../redux/actionType';
import NoticesView from '../profession/NoticeView';

const {FAILURE,NORMAL,LOADING,EMPTY,NONE} = refreshLoadType;

type Props = {
    data:Array, // 数组数据
    loadType?: 'FAILURE'|'NORMAL'|'LOADING'|'EMPTY'|'NONE', // 加载状态
    refreshing?:boolean, // 刷新状态
    style?: any,

    refreshData:Function, // 上拉刷新获取数组对象数据函数
    loadData:Function, // 下拉加载获取数组对象数据函数

    listComponent:Component|Function,
    headerComponent:Component,
    // footerContent:Component, // 因为有了自定义的footer，所以这个就不开放了
    emptyComponent:Component,
    separatorComponent:Component,

    footerEmptyText?:string, // 数据为空时text
    footerNormalText?:string, // 正常状态底部text
    footerFailureText?:string, // 加载失败时底部text
    footerLoadingText?:string, // 正在加载数据时底部text
    footerNoneText?:string, // 数据已经全部加载底部text
}

export default class RefreshLoadList extends PureComponent <Props> {
    static propTypes = {
        refreshData:PropTypes.func.isRequired,
        loadData:PropTypes.func.isRequired,
    }

    static defaultProps = {
        footerEmptyText:'空空如也O__O "…',
        footerNormalText:'加载更多',
        footerFailureText:'居然加载失败了╭(╯^╰)╮',
        footerLoadingText:'正在加载...',
        footerNoneText:'已经加载完了哦！'
    }

    constructor(props) {
        super(props);
    }

    _renderFooter = () => {
        const {
            footerNormalText,
            footerFailureText,
            footerLoadingText,
            footerNoneText,
            loadType,
            data
        } = this.props;

        if (data.length === 0) return null; // 在数组数据为空的情况下直接跳过渲染

        switch(loadType) {
            case NORMAL:
                return <FooterLoad
                    text={footerNormalText}
                />;
            case NONE:
                return <FooterLoad
                    text={footerNoneText}
                />;
            case EMPTY:
                return null; // 因为数组数据为空的时会渲染emptyComponent所以footer就不渲染了
            case FAILURE:
                return <FooterLoad
                    text={footerFailureText}
                />;
            case LOADING:
                return <FooterLoad
                    spinner="default"
                    text={footerLoadingText}
                />;
        }
    }

    _renderRefresh = () => {
        const {refreshing,refreshData} = this.props;

        return <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshData}
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

    _renderEmpty = () => {
        return (this.props.emptyComponent) ? this.props.emptyComponent: <NoticesView />;
    }

    _renderHeader = () => {
        return (this.props.headerComponent) ? this.props.headerComponent:null;
    }

    _renderSeparator = () => {
        return (this.props.separatorComponent) ? this.props.separatorComponent:null;
    }

    render(){
        const {
            data,
            loadData
        } = this.props;

        return (
            <FlatList
                data={data}
                renderItem={this.props.listComponent}
                refreshControl={this._renderRefresh()}
                ListEmptyComponent={this._renderEmpty()}
                ListFooterComponent={this._renderFooter()}
                ListHeaderComponent={this._renderHeader()}
                ItemSeparatorComponent={this._renderSeparator()}
                onEndReached={loadData}
                onEndReachedThreshold={0.1}
            />
        )
    }
}