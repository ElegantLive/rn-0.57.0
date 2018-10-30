import React, { Component } from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Content,Card,CardItem,Icon,Body,Left,Right,Button,Thumbnail,Text } from 'native-base';
import LinkBar from '../../component/base/LinkBar';
import UserCard from '../../component/profession/UserCard';
import LongText from '../../component/profession/LongText';
import ImageCard from '../../component/profession/ImageCard';
import { autoImageOne, adjustReleaseTime } from '../../utils/functions';

@withNavigation
export default class New extends Component{
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log(SCREEN_WIDTH,SCREEN_HEIGHT)
    }
    render(){
        const avatar = require('../../resouces/img/2.jpg');
        const avatar1 = require('../../resouces/img/boy.png');
        const avatar2 = require('../../resouces/img/404@1.png');
        const imglist = [
            // 'https://www.hnjubi.cn/piaopiao/img/hhh.jpg',
            // 'http://res.hnjubi.cn/hnjubi/image/20181027/6d1803589ea446d17720c34b0d1543ef_32*32.png',
            'http://res.hnjubi.cn/hnjubi/image/20181028/9d6f916950eb6381419537169ce4bace_1280*1937.jpg',
            'http://res.hnjubi.cn/hnjubi/image/20181028/eb2b38410c69ce68592004523e0bfaf4_320*484.jpg',
            'http://res.hnjubi.cn/hnjubi/image/20181028/c2050f864e8d2aee4ee27b6aacb2951e_658*343.jpeg',
            'http://res.hnjubi.cn/hnjubi/image/20181028/e6da413cec14490f4abe74fd7eda9a63_1937*1280.jpg',
        ];

        const list = imglist.map((v,k) => {
            if (imglist.length === 1) {
                const style = autoImageOne(v);

                return { source: { uri:v }, style: [style,styles.image] };
            } else {
                const style = { height : 200, width : ((SCREEN_WIDTH-10)/2)-10};
    
                return {source: {uri : v},style:[style],viewStyle:[style,styles.listView]};
            }
        })
        
        return (
                <Content>
                <ScrollView style={styles.container}>
                    <Card>
                        <UserCard 
                            avatar={avatar}
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
                            style={{
                                width: SCREEN_WIDTH,
                                flexWrap: 'wrap',
                                display:'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <ImageCard
                                images = {list}
                            />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={avatar} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <View
                            style={{flexDirection:"column"}}
                        >
                            <Text
                                includeFontPadding={true}
                                numberOfLines={3}
                                ellipsizeMode="tail"
                            >
                                美食是梵蒂冈和更好发挥过分了
                                后挨批额我偶同我
                                五月美食是梵蒂冈和更好发挥过分了后挨批额我偶同
                                我五月天又热又清热怀疑和广阔的减肥茶弄好吧是创新宁波房地
                                更合适的干哈方大化工花费更多符合规范化嘎哈购房贷款美食是梵蒂冈和
                                更好发挥过分了后挨批额我偶同我五月天又热又清热怀疑和广阔的减肥茶弄好吧
                                是创新宁波房地更合适的干哈方大化工花费更多符
                                合规范化嘎哈购房贷款美食是
                                梵蒂冈和更好发挥过分了后挨批额我偶同我五月天又热
                                又清热怀疑和广阔的减肥茶弄好吧是创新宁波房地更合适的干
                                哈方大化工花费更多符合规范化嘎哈购房贷款美
                                食是梵蒂冈和更
                                好发挥过分了后挨批额我偶同我五月
                                天又热又清热怀疑和广阔的减肥茶弄好吧是创新宁波房地更合适
                                的干哈方大化工花费更多符合规范化嘎哈购房贷款美食是梵蒂冈和更好发挥过分了后挨
                                批额我偶同我五月天又热又清热怀疑和广阔的减肥茶弄好吧是创新
                                宁波房地更合适的干哈方大化工
                                花费更多符合规范化嘎哈购房贷款天又热又清热
                                怀疑和广阔的减肥茶弄好
                                吧是创新宁波房地更合适的干哈方大化工花
                                费更多符合规范化嘎哈
                                购房贷款
                            </Text>
                            <LinkBar 
                                title="展开"
                                transparent
                                // block
                                // btnStyle={}
                            />
                        </View>
                        </CardItem>
                        <CardItem cardBody>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={avatar} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
            </ScrollView>
                </Content>
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
    }
});