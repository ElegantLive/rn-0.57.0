import React, { Component } from 'react';
import {
    // Button,
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { NavigationBar,Input,Theme,Button } from 'teaset';
import {connect} from 'react-redux';
import { login as LoginAction } from '../../redux/token';
import { FontSize } from '../../utils/system/fontSize';

@connect(
    state => state.token,
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
            password : '',
        }
    }

    componentWillReceiveProps(){
        console.log(this.props)
        if (this.props.msg === 'ok') this.props.navigation.navigate('User');
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
        // alert('login');
        const user = this.state;
        this.props.LoginAction(user);
    }

    diyDeal = (config) => {
        console.log('自定义处理事件',config);
        (config.data.error_code > 0) ? this.handleChange('msg',config.data.msg): this.props.navigation.navigate('User');
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
                {/* <NavigationBar 
                    leftComponent={
                        <Button onPress={this.goBack}>
                            <Icon name="back" />
                        </Button>
                    }
                    centerComponent={<Title>登录</Title>}
                    rightComponent={
                        <Button onPress={this.goRegister}>
                            <Text>去注册</Text>
                        </Button>
                    }
                /> */}
                <NavigationBar 
                    style={styles.nav}
                    leftView = {<NavigationBar.BackButton onPress={this.goBack} />}
                    title = "登录" 
                    rightView = {<NavigationBar.LinkButton title='去注册' onPress={this.goRegister} />}
                />
                <View style={styles.scrollView}>
                    <TextInput 
                        style={styles.InputStyle}
                        maxLength = {11}
                        placeholder = "请输入您的手机号"
                        keyboardType = "number-pad"
                        // autoCapitalize="none" // 不转化为大写 其他属性-sentences-每句首字母转大写-word-每个单词首字母转大写-characters-所有字母
                        // placeholderTextColor="red" // 占位文本的颜色
                        autoFocus= {true} // 在componentDidMount后会获得焦点。默认值为false
                        clearButtonMode= "always" // 清除按钮-总是出现
                        onChangeText = {v => this.handleChange('mobile',v)}
                    />
                    <Input 
                        style={styles.InputStyle}
                        // textContentType="password" // bug
                        placeholder = "请输入您的密码"
                        // password={true}  // bug
                        secureTextEntry={true}
                        autoCapitalize="none"
                        clearButtonMode= "always" // 清除按钮-总是出现
                        onChangeText = {v => this.handleChange('password',v)}
                    />
                </View>
                <View style={styles.btnView}>
                    <Button
                        onPress={this.login}
                        size="md"
                        style={styles.loginBtn}
                    >
                        <Text style={styles.loginTitle}>登录</Text>
                    </Button>
                </View>
            </View>
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
    scrollView: {
		// backgroundColor: Theme.blank,
		// flex: 0,
        marginTop: px2dp(200),
        // border:"none"
    },
    nav:{
        backgroundColor:Theme.startBlue
    },
    InputStyle:{
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
        // borderBottomColor:'',
        paddingLeft:px2dp(15),
        borderBottomWidth:1,
        height: px2dp(80),
        fontSize:FontSize(15),
		borderColor: Theme.borderGray,
        // paddingLeft:px2dp(10),
        // alignItems:'flex-start',
        // justifyContent:'flex-start',
		marginHorizontal: px2dp(50),
		marginVertical: px2dp(20),
    },
    btnView:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:px2dp(100)
    },
    loginBtn:{
        borderWidth:0,
		marginHorizontal: px2dp(50),
        // borderRightWidth:0,
        // borderTopWidth:0,
        backgroundColor:Theme.startBlue,
        width:px2dp(400),
        height:px2dp(80),
        borderRadius:px2dp(40)
    },
    loginTitle:{
        color:'white',
        fontSize:FontSize(16)
    }
  });