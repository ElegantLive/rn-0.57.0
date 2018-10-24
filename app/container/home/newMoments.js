import React, { Component } from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Content,Card,CardItem,Icon,Body,Left,Right,Button,Thumbnail,Text } from 'native-base';
import LinkBar from '../../component/base/linkBar';
import UserAvatar from '../../component/profession/userAvatar';
import UserCard from '../../component/profession/userCard';
import LongText from '../../component/profession/longText';

@withNavigation
export default class New extends Component{
    constructor(props) {
        super(props);
        // console.log(props);
    }
    render(){
        const avatar = require('../../resouces/img/2.jpg');
        return (
                <Content>
                <ScrollView style={styles.container}>
                    <Card>
                        <UserCard 
                            avatar={avatar}
                            name="NativeBase"
                            description="GeekyAnts"
                        />
                        <CardItem cardBody>
                            <LongText
                                text="美食是梵蒂冈和更好发挥过分了后挨批额我偶同我
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
                                购房贷款"
                            />
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
                        <CardItem>
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
});