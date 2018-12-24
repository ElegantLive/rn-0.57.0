const password = {
	presence: true,
	length: {
		minimum: 6, // 密码最小长度
		// maximum:20 , // 密码最大长度
		message: '^密码最短为6位数'
	},
};

const confirmPwd = {
	presence: true,
	equality: {
		attribute: 'password',
		message: '^两次输入的密码不一样'
	}
};

export default {
	confirmPwd,
	password
};  