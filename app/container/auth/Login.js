import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Content, Container, Form, Label, Input, Item } from 'native-base';
import { login as LoginAction } from '../../redux/token';
import NavBar from '../../component/base/NavBar';
import LinkBar from "../../component/base/LinkBar";
import form from "../../component/higher/form";
import validate from 'validate.js';
import { dealValidate } from '../../utils/functions';
import check from '../../component/higher/check';

@form(
    { 
        mobile: '',
        password: ''
    }, 
    { LoginAction }
)
@check(constraints => {
    const { mobile, password } = constraints;

    return { mobile, password };
})
class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.goRegister = this.goRegister.bind(this);
        this.goFindPwd = this.goFindPwd.bind(this);
        this.check = this.check.bind(this);
    }

    componentWillReceiveProps() {
        if (true === this.props.auth) this.props.navigation.navigate('User');
    }

    login() {
        const res = this.props.checkAll();

        const resBool = dealValidate(res);

        if(!resBool) return false;

        const { LoginAction, state } = this.props;

        LoginAction(state);
    };

    goRegister() {
        this.props.navigation.navigate('Register');
    };

    goFindPwd() {
        this.props.navigation.navigate('FindPwd');
    };

    check() {
        const constraints = {mobile:mobileConstraint,password:passwordConstraint};

        const res = validate(this.props.state,constraints);

        return res ? res: true;
    };

    render() {
        return (
            <Container>
                <NavBar 
                    left="back"
                    headerTitle='登录'
                />
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={styles.inputLable}>手机号</Label>
                            <Input
                                maxLength = {11}
                                keyboardType = "number-pad"
                                // autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
                                clearButtonMode = "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('mobile',v)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={styles.inputLable}>密码</Label>
                            <Input 
                                secureTextEntry={true}
                                autoCapitalize="none"
                                clearButtonMode= "always" // 清除按钮-总是出现
                                onChangeText = {v => this.props._handleChange('password',v)}
                            />
                        </Item>
                        <View style={styles.btnView}>
                            <LinkBar
                                title="忘记密码"
                                transparent
                                onPress={this.goFindPwd}
                                btnStyle={styles.btn}
                                titleStyle={styles.btnTitle}
                            />
                            <LinkBar
                                title="登录"
                                primary={true}
                                rounded={true}
                                block
                                onPress={this.login}
                                btnStyle={[styles.btn,styles.loginBtn]}
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

export default Login;

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
    btnTitle:{
        color:BaseColor.skayBlue,
        fontSize:FONT_SIZE(14)
    },
    loginBtn:{
        flex:1,
        width:px2dp(350),
        backgroundColor:BaseColor.skayBlue,
    },
    loginTitle:{
        color:'white',
        fontSize:FONT_SIZE(16)
    },
});