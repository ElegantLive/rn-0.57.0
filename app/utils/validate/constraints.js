const code = {
    presence:{
        message:"^请输入验证码"
    },
    format:{
        pattern:/^(\d{4})$/, // 正则表达式
        message:"^验证码是4个数字", // 错误提示
    }
}

const mobile = {
    presence: {
        message: "^请输入手机号码", // 错误提示
    }, // 是否必须-isrequire
    format: {
        pattern: /^(1[34578]\d{9})$/, // 正则表达式
        message: "^请输入正确的手机号码", // 错误提示
    }
}

const confirmPwd = {
    presence:{
        message:"^请输入确认密码", // 错误提示
    },
    equality: {
        attribute: "password",
        message: "^两次输入的密码不一样"
    }
}

const password = {
    presence:{
        message:"^请输入密码", // 错误提示
    },
    length:{
        minimum:6, // 密码最小长度
        // maximum:20 , // 密码最大长度
        message:"^密码最短为6位数"
    },
}

export {
    mobile,
    code,
    confirmPwd,
    password
}