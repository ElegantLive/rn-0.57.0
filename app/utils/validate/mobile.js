const mobile = {
	format: {
		pattern: /^(1[34578]\d{9})$/, // 正则表达式
		message: '^请输入手机号码', // 错误提示
	}
};

const mobileR = {
	presence: true, // 是否必须-isrequire
	format: {
		pattern: /^(1[34578]\d{9})$/, // 正则表达式
		message: '^请输入手机号码', // 错误提示
	}
};

export default {
	mobile,
	mobileR
};
