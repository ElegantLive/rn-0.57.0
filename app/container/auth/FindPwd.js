import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Content,Container,Form,Label,Input,Item } from 'native-base';
import NavBar from '../../component/base/NavBar';
import LinkBar from "../../component/base/LinkBar";
import form from "../../component/higher/form";
import axios from 'axios';
import { dealValidate } from '../../utils/functions';
import { showMessage } from 'react-native-flash-message';
import { sendCode } from '../../utils/request/functions';
import check from '../../component/higher/check';

const initState = {
    mobile:'',
    code:'',
    password:'',
    confirmPwd:'',
    sendSeconds: 0,
    sendBtn:true
};

@form(initState)
@check(constraints => {
    const { mobileR, code, password, confirmPwd } = constraints;
    return { mobile: mobileR, password, confirmPwd, code };
})
export default class FindPwd extends Component {
    constructor(props) {
        super(props);
        this.findPwd = this.findPwd.bind(this);
        this.getCode = this.getCode.bind(this);
        this.goLogin = this.goLogin.bind(this);
        this.goRegister = this.goRegister.bind(this);
    }

    async findPwd() {
        const {mobile,code,password,confirmPwd} = this.props.state;
        const data = {mobile,code,password,confirmPwd};

        const response = this.props.checkAll();

        const result = dealValidate(response);

        if(true !== result) return false;

        const res = await axios.post('user/find_pwd',data);

        if (res.error === 0) {
            showMessage({
                message:"找回密码成功！",
                type:"success",
                onHide: this.goLogin,
                icon:"success"
            })
        }
    };

    async getCode() {
        const res = this.props.checkItem('mobile');

        if (true !== res) {
            const error = res.join("\n");

            showMessage({
                message:error,
                type:"danger",
                icon:"danger"
            });
            return false;
        }

        await sendCode(this.props.state.mobile);
        
        this.props._handleChange('sendSeconds', 60);
        this.props._handleChange('sendBtn', false);
        this.timers = setInterval(() => {
            let sendSeconds = this.props.state.sendSeconds - 1;
            this.props._handleChange('sendSeconds',sendSeconds);
            if (sendSeconds == 0) {
                this.props._handleChange('sendBtn',true);
                clearInterval(this.timers)
            }
        }, 1000)
    };

    goLogin() {
        this.props.navigation.navigate('Login');
    };

    goRegister() {
        this.props.navigation.navigate('Register');
    };
    
    render() {
        return (
            <Container>
                <NavBar 
                    left="back"
                    headerTitle='找回密码'
                />
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel>
                            <Label style={styles.inputLable}> 手 机 号 </Label>
                            <Input
                                maxLength = {11}
                                keyboardType = "number-pad"
                                // autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
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
                                title={(this.props.state.sendSeconds === 0) ? '获取验证码': ` ${this.props.state.sendSeconds} 秒后获取` }
                                transparent
                                disabled={!this.props.state.sendBtn}
                                onPress={this.getCode}
                                btnStyle={styles.sendBtn}
                                titleStyle={[styles.btnTitle,(this.props.state.sendBtn) ? styles.activeTitle: styles.disableTitle]}
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
                                onPress={this.goLogin}
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
        marginTop: px2dp(20),
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
        marginTop: px2dp(80),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        height:px2dp(80),
    },
    sendBtn:{
        width:110
    },
    btnTitle:{
        color:BaseColor.skayBlue,
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
        width:px2dp(350),
        backgroundColor:BaseColor.skayBlue,
    },
    loginTitle:{
        color:'white',
        fontSize:FONT_SIZE(16)
    },
});