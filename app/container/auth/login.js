import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { NavigationBar,Input } from 'teaset';
import {connect} from 'react-redux';
import { login as LoginAction } from '../../redux/token';

@connect(
    state => {
        return {
            token:state.token,
            error:state.error
        }
    },
    { LoginAction }
)
export default class Login extends Component {
    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            password : ''
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
        const error = this.props.error;
        console.log(error);
        if (error.error_code > 0) console.log(error.msg);
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }
    
    login = () => {
        const user = this.state;
        this.props.LoginAction(user,(config)=>this.diyDeal(config));
    }

    diyDeal = (config) => {
        console.log('自定义处理事件',config)
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
    
    goRegister = () => {
        this.props.navigation.navigate('Register');
    } 

    handleChange = (name,value) => {
        this.setState({
            [name] : value
        },()=>{console.log(this.state)})
    }

    render(){
        return (
            <View style={styles.container}>
                <NavigationBar 
                    leftView = {<NavigationBar.BackButton onPress={this.goBack} />}
                    title = "登录" 
                    rightView = {<NavigationBar.LinkButton title='Register' onPress={this.goRegister} />}
                />
                <Input 
                    style={styles.InputStyle}
                    maxLength = {11}
                    placeholder = "请输入您的手机号"
                    keyboardType="number-pad"
                    autoCapitalize="none" // 不转化为大写 其他属性-sentences-每句首字母转大写-word-每个单词首字母转大写-characters-所有字母
                    placeholderTextColor="red" // 占位文本的颜色
                    autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
                    clearButtonMode= "always" // 清除按钮-总是出现
                    onChangeText = {v => this.handleChange('mobile',v)}
                />
                <Input 
                    style={styles.InputStyle}
                    placeholder = "请输入您的密码"
                    password={true}
                    autoCapitalize="none"
                    clearButtonMode= "always" // 清除按钮-总是出现
                    onChangeText = {v => this.handleChange('password',v)}
                />
                {/* <Text>login screen</Text> */}
                {/* <Button title="go to home" onPress={()=>this.props.navigation.navigate('Home')} /> */}
                {/* <Button title="go to Register" onPress={()=>this.props.navigation.navigate('Register')} /> */}
                <Button title="login" onPress={this.login} />
                {/* <Button title="asnycInit" onPress={()=>console.log(`test for ${JSON.stringify(this.props)}`)} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: 60
    },
    InputStyle:{
        height:30,
        width:300,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    }
  });