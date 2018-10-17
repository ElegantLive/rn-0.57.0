import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Keyboard
} from 'react-native';
import { Content,Container,Form,Label,Input,Item } from 'native-base';
import validate from 'validate.js';
import NavBar from '../../component/base/navBar';
import LinkBar from "../../component/base/linkBar";
import form from "../../component/high/form";
import {
    passwordConstraint,
    confirmPwdConstraint
} from '../../utils/validate/constraints';
import axios from 'axios';
import {dealValidate} from '../../utils/functions';
import {showMessage} from 'react-native-flash-message';

const initState = {
    password:'',
    confirmPwd:'',
}

const constraints = {
    password:passwordConstraint,
    confirmPwd:confirmPwdConstraint
}; // 定义验证约束集合

@form(initState)
export default class UpdatePwd extends Component{
    updatePwd = async () => {
        const data = this.props.state;

        const response = validate(data,constraints);

        const result = dealValidate(response);

        if(true !== result) return false;

        const res = await axios.post('user/update_pwd',data);

        if (res.error === 0) {
            showMessage({
                message:"修改密码成功！",
                type:"success",
                onClose:() => {
                    this.props.navigation.navigate('User');
                }
            })
        }
    }
    
    render(){
        return (
            <Container>
                <NavBar 
                    left="back"
                    headerTitle='修改密码'
                />
                <Content>
                    <Form style={styles.form}>
                        <Item 
                            floatingLabel
                        >
                            <Label style={styles.inputLable}> 新 密 码 </Label>
                            <Input 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                clearButtonMode= "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('password',v)}
                            />
                        </Item>
                        <Item 
                            floatingLabel
                            last
                        >
                            <Label style={styles.inputLable}>确认密码</Label>
                            <Input 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                clearButtonMode= "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('confirmPwd',v)}
                            />
                        </Item>
                        <View style={styles.btnView}>
                            <LinkBar
                                title="确认"
                                primary={true}
                                rounded={true}
                                block
                                onPress={this.updatePwd}
                                btnStyle={[styles.btn,styles.submitBtn]}
                                titleStyle={styles.submitTitle}
                            />
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    rightTitle:{
        color:BaseColor.startBlue
    },
    form:{
        marginTop: px2dp(30),
        marginHorizontal:px2dp(30),
    },
    item:{
        marginTop:px2dp(10)
    },
    inputLable:{
        fontSize:FONT_SIZE(14)
    },
    codeInput:{
        width:px2dp(300),
        fontSize:FONT_SIZE(16)
    },
    btnView:{
        marginHorizontal:px2dp(5),
        flexDirection:"row",
        marginTop: px2dp(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        height:px2dp(80),
    },
    sendBtn:{
        width:px2dp(200)
    },
    btnTitle:{
        fontSize:FONT_SIZE(14)
    },
    activeTitle:{
        color:BaseColor.skayBlue,
    },
    disableTitle:{
        color:BaseColor.disableColor,
    },
    submitBtn:{
        flex:1,
        marginHorizontal:px2dp(50),
        width:px2dp(350),
    },
    submitTitle:{
        color:'white',
        fontSize:FONT_SIZE(16)
    },
});