import React, { PureComponent } from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import { Content,Card,CardItem,Icon,Body,Left,Right,Button,Thumbnail,Text, Badge } from 'native-base';
import UserCard from '../../component/profession/UserCard';
import LongText from '../../component/profession/LongText';
import ImageCard from '../../component/profession/ImageCard';
import { autoImageOne, adjustReleaseTime } from '../../utils/functions';
import IconNumsCard from '../../component/profession/IconNumsCard';
import RefreshLoadList from '../../component/base/RefreshLoadList';
import { forbidRefreshLoadType,refreshLoadType } from '../../redux/actionType';
import NoticeView from '../../component/profession/NoticeView';
import { showMessage } from 'react-native-flash-message';

const {FAILURE,NORMAL,LOADING,EMPTY,NONE} = refreshLoadType;

export default class New extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            resreshing: false,
            loadType: NORMAL
        };
        this.dealDataType = this.dealDataType.bind(this);
        this.getData = this.getData.bind(this);
        this.getRefreshData = this.getRefreshData.bind(this);
        this.getLoadData = this.getLoadData.bind(this);
    }

    componentDidMount () {
        // fix for the refreshing is up refreshing too fast
        setTimeout(() => {
            this.getRefreshData();
        }, 100);
    }

    getData(page) {
        // return {error_code:12389,msg:'出错了',data:[]};
        const rend = Math.random();
        // 模拟出错的情况
        if (rend < 0.25) return {error_code:14520,msg:'#%￥%@DGAFDGfd',data:[]};

        // 模拟为空的情况
        if (rend < 0.5 && rend > 0.25) return {page,hasMore:false,data:[]};

        const data = [
            {key: `Devin1${Math.random()}`},
            {key: `ackson1${Math.random()}`},
            {key: `James1${Math.random()}`},
            {key: `Joel1${Math.random()}`},
            {key: `John1${Math.random()}`},
            {key: `Jillian1${Math.random()}`},
            {key: `Juli1e1${Math.random()}`},
            {key: `Jimmy1${Math.random()}`},
        ];
        // 模拟加载完的情况
        if (rend < 0.75 && rend >= 0.5) return {page,hasMore:false,data};
        // 模拟正常情况
        if (rend >= 0.75) return { page, hasMore:true, data };
    };

    dealDataType(res,type) {
        // 出错
        if (!res) {
            if (type === 'load') return FAILURE;

            showMessage({
                message:"刷新出错了",
                description:"检查网络稍后试试吧",
                type:"danger",
                icon:"danger"
            })
            return NORMAL;
        }

        if (res.error_code) return FAILURE;

        const { hasMore, data } = res;
        // 为空
        if (data.length === 0) return EMPTY;
        // 正常
        if (true === hasMore) return NORMAL;
        // 加载完毕
        return NONE;
    }

    getRefreshData() {
        if (this.state.refreshing) return false;

        this.setState({
            refreshing:true,
        },  () => setTimeout(() => {
                const res = this.getData(1);

                console.log(res);

                const loadType = this.dealDataType(res,'refresh');

                console.log(loadType);

                this.setState({
                    data:res.data,
                    refreshing:false,
                    loadType
                })
            }, 2000)
        )
    }

    getLoadData() {
        if (this.state.loadType in forbidRefreshLoadType) return false;

        this.setState({
            loadType:LOADING
        },  () => setTimeout(() => {
                const res = this.getData(1);

                console.log(res);

                const loadType = this.dealDataType(res,'load');

                console.log(loadType);

                const data = [...this.state.data,...res.data];
                this.setState({
                    data,
                    loadType
                })
            }, 300)
        )
    }

    render(){
        const {data,refreshing,loadType} = this.state;

        const avatar = require('../../resouces/img/2.jpg');
        const avatar1 = require('../../resouces/img/boy.png');
        const avatar2 = require('../../resouces/img/404@1.png');
        const imglist = [
            // 'https://www.hnjubi.cn/piaopiao/img/hhh.jpg',
            // 'http://res.hnjubi.cn/hnjubi/image/20181027/6d1803589ea446d17720c34b0d1543ef_32*32.png',
            '9d6f916950eb6381419537169ce4bace_1280*1937.jpg',
            'eb2b38410c69ce68592004523e0bfaf4_320*484.jpg',
            'c2050f864e8d2aee4ee27b6aacb2951e_658*343.jpeg',
            'e6da413cec14490f4abe74fd7eda9a63_1937*1280.jpg',
        ];

        const list = imglist.map((v,k) => {
            const uri = 'https://ycc.hnjubi.cn/hnjubi/image/20181028/' + v;

            if (imglist.length === 1) {
                const style = autoImageOne(uri);

                return { source: { uri }, style: [style,styles.image] };
            } else {
                const length = ((SCREEN_WIDTH-10)/2)-10;

                const style = { height : length, width : length};
    
                return {source: {uri},style:[style],viewStyle:[style,styles.listView]};
            }
        });

        const content = (
            <Card>
                <UserCard 
                    avatar={list[0].source}
                    name="NativeBase"
                    description={adjustReleaseTime('2018-10-27 12:12:32')}
                    right="follow"
                    rightPress={()=>console.log('press')}
                />
                <CardItem cardBody>
                    <LongText
                        text="美食是梵蒂冈和更好发挥过分了\n后挨批额我偶同我\n
                        五月美食是梵蒂冈和更好发挥过分了后挨批\n额我偶同
                        我五月天又热又清热怀疑和广阔的减\n肥茶弄好吧是创新宁波房地
                        更合适的干哈方大化\n工花费更多符合规范化嘎哈购房贷款美食是梵蒂冈和
                        更好发挥过分了后挨批额我偶同我五月天\n又热又清热怀疑和广阔的减肥茶弄好吧
                        是创新宁波房地更合适的干\n方大化工花费更多符
                        合规范化嘎哈购房\n\n贷款美食是
                        梵蒂冈和更好发挥过分了后挨批额我偶同我\n五月天又热
                        又清热怀疑和广阔的\n减肥茶弄好吧是创新宁波房地更合适的干
                        哈方大化工花费更多符合规范化嘎哈购房贷\n款美
                        食是梵蒂冈\n和更
                        好发挥过分了后挨批\n额我偶同我五月
                        天又热又清热\n怀疑和广阔的减肥茶弄好吧是创新宁波房地更合适
                        的干哈方大\n化工花费更\n多符合规范化嘎哈购房贷款美食是梵蒂冈和更好发挥过分了后挨
                        批额我偶同我五月天又热又清热怀疑和广阔的减肥茶弄好吧是创新
                        宁波房地更合适的干哈方大化\n工
                        花费更多符合\n规范化嘎哈购房贷款天又热又清热
                        怀疑和广阔的减肥\n茶弄好
                        吧是创新宁波房地更合适的干哈方大化工花
                        费更多符合规\n范化嘎哈
                        购房贷款"
                    />
                </CardItem>
                <CardItem
                    cardBody
                    style={styles.ImageCard}
                >
                    <ImageCard
                        images = {list}
                    />
                </CardItem>
                <IconNumsCard
                    item = {[
                        {icon:{name:'star-o',type:'FontAwesome'},activeIcon:{name:'star',type:'FontAwesome'},active:true,nums:233},
                        {icon:{name:'thumbs-o-up',type:'FontAwesome'},activeIcon:{name:'thumbs-up',type:'FontAwesome'},active:true,nums:233},
                        {icon:{name:'comment-o',type:'FontAwesome'},activeIcon:{name:'comment',type:'FontAwesome'},active:true,nums:233},
                    ]}
                />
            </Card>
        );
        
        return (
            <RefreshLoadList 
                loadData={this.getLoadData}
                refreshData={this.getRefreshData}
                loadType={loadType}
                refreshing={refreshing}
                data={data}
                listComponent={({item}) => {
                    return content
                }}
                emptyComponent={<NoticeView
                    onClickRefresh={this.getRefreshData}
                    type={loadType == FAILURE ? 'noNetwork': 'dataEmpty'}
                />}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    listView:{
        marginHorizontal:5,
        marginVertical:5,
        // flex:1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    ImageCard:{
        width: SCREEN_WIDTH,
        flexWrap: 'wrap',
        display:'flex',
        flexDirection: 'row',
    }
});