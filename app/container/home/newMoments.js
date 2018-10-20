import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Content,Card,CardItem,Icon,Body,Left,Right,Button,Thumbnail } from 'native-base';
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