import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Content,Container,Form,Label,Input,Item } from 'native-base';
import {connect} from 'react-redux';
import { login as LoginAction } from '../../redux/token';
import NavBar from '../../component/base/navBar';
import LinkBar from "../../component/base/linkBar";
import form from "../../component/high/form";

@connect(
    state => state.token,
    { LoginAction }
)
@form
export default class Login extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(){
        // console.log(this.props);
        if (this.props.auth) this.props.navigation.navigate('User');
    }

    componentDidMount() {
        // console.log(this.props)
    }

    componentDidUpdate() {
        // const error = this.props.error;
        // console.log(error);
        // if (error.error_code > 0) console.log(error.msg);
        // if (this.props.msg)
    }

    componentDidCatch(error, errorInfo) {
        // console.log(error);
        // console.log(errorInfo);
    }
    
    login = () => {
        const user = this.props.state;
        this.props.LoginAction(user);
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
    
    goRegister = () => {
        this.props.navigation.navigate('Register');
    } 

    goFindPwd = () => {
        this.props.navigation.navigate('FindPwd');
    }

    render(){
        return (
            <Container>
                <NavBar 
                    left="default"
                    headerTitle='登录'
                />
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={styles.inputLable}>手机号</Label>
                            <Input
                                maxLength = {11}
                                keyboardType = "number-pad"
                                autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
                                clearButtonMode= "always" // 清除按钮-总是出现
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
                                disabled={false}
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
        color:BaseColor.brandPrimary,
        fontSize:FONT_SIZE(14)
    },
    loginBtn:{
        flex:1,
        marginHorizontal:px2dp(50),
        width:px2dp(350),
    },
    loginTitle:{
        color:'white',
        fontSize:FONT_SIZE(16)
    },
});