import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Content,Container,Form,Label,Input,Item } from 'native-base';
import validate from 'validate.js';
import NavBar from '../../component/base/navBar';
import LinkBar from "../../component/base/linkBar";
import form from "../../component/high/form";
import {Toast} from '../../component/base/toast';
import {mobile,code,password,confirmPwd} from '../../utils/validate';
import axios from 'axios';
import {sendCode} from '../../utils/functions';

const initState = {
    mobile:'',
    code:'',
    password:'',
    confirmPwd:'',
}

@form(initState)
export default class FindPwd extends Component{
    findPwd = async () => {
        const result = this.check();

        if(result) {
            let error = '';
            for (let i in result) {
                error += result[i].join("\n") + "\n";
            }

            Toast.showError(error);
            return false;
        }

        const data = this.props.state;

        const res = await axios.post('user/find_pwd',data);

        if (res.error === 0) Toast.showSuccess('找回密码成功！',this.goLogin);
    }

    sendCode = async () => {
        const constraints = {mobile};

        const checkMobile = this.props.state.mobile;

        const res = validate({mobile:checkMobile},constraints);

        if (res && res.mobile) {
            const error = res.mobile.join("\n");

            Toast.showError(error);
            return false;
        }
        
        sendCode(checkMobile);
    }

    goLogin = () => {
        this.props.navigation.navigate('Login');
    }

    goRegister = () => {
        this.props.navigation.navigate('Register');
    }

    check = () => {
        const constraints = {mobile,code,password,confirmPwd};

        const res = validate(this.props.state,constraints);
        
        return res;
    }

    render(){
        return (
            <Container>
                <NavBar 
                    left="default"
                    headerTitle='找回密码'
                />
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel>
                            <Label style={styles.inputLable}> 手 机 号 </Label>
                            <Input
                                maxLength = {11}
                                keyboardType = "number-pad"
                                autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
                                clearButtonMode= "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('mobile',v)} 
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.inputLable}> 验 证 码 </Label>
                            <Input 
                                maxLength = {4}
                                keyboardType = "number-pad"
                                autoCapitalize="none"
                                clearButtonMode= "always" // 清除按钮-总是出现
                                style={styles.codeInput}
                                // onFocus={this.props._handleChange('codeInput',true)}
                                onChangeText = {v => this.props._handleChange('code',v)}
                            />
                            <LinkBar
                                title="获取验证码"
                                transparent
                                onPress={this.sendCode}
                                btnStyle={styles.sendBtn}
                                titleStyle={styles.btnTitle}
                            />
                        </Item>
                        <Item 
                            inlineLabel
                        >
                            <Label style={styles.inputLable}> 新 密 码 </Label>
                            <Input 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                clearButtonMode= "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('password',v)}
                            />
                        </Item>
                        <Item inlineLabel last>
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
                                title="去登陆"
                                transparent
                                onPress={this.goFindPwd}
                                btnStyle={styles.btn}
                                titleStyle={styles.btnTitle}
                            />
                            <LinkBar
                                title="确认"
                                primary={true}
                                rounded={true}
                                block
                                onPress={this.findPwd}
                                btnStyle={[styles.btn,styles.submitBtn]}
                                titleStyle={styles.loginTitle}
                            />
                            <LinkBar
                                title="去注册"
                                transparent
                                onPress={this.goRegister}
                                btnStyle={styles.btn}
                                titleStyle={styles.btnTitle}
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
        color:BaseColor.brandPrimary,
        fontSize:FONT_SIZE(14)
    },
    submitBtn:{
        flex:1,
        marginHorizontal:px2dp(50),
        width:px2dp(350),
    },
    loginTitle:{
        color:'white',
        fontSize:FONT_SIZE(16)
    },
});