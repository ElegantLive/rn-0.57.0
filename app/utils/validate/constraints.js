const codeConstraint = {
	presence: true,
	format: {
		pattern: /^(\d{4})$/, // 正则表达式
		message: '^请输入验证码', // 错误提示
	}
};

const mobileConstraint = {
	presence: true, // 是否必须-isrequire
	format: {
		pattern: /^(1[34578]\d{9})$/, // 正则表达式
		message: '^请输入手机号码', // 错误提示
	}
};

const confirmPwdConstraint = {
	presence: true,
	equality: {
		attribute: 'password',
		message: '^两次输入的密码不一样'
	}
};

const passwordConstraint = {
	presence: true,
	length: {
		minimum: 6, // 密码最小长度
		// maximum:20 , // 密码最大长度
		message: '^密码最短为6位数'
	},
};

const userNameConstraint = {
	presence: true,
	length: {
		maximum: 25,
		message: '^昵称长度超出限制了'
	}
};

export {
	mobileConstraint,
	codeConstraint,
	confirmPwdConstraint,
	passwordConstraint,
	userNameConstraint
};