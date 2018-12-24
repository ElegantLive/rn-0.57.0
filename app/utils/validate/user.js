const userName = {
	presence: true,
	length: {
		maximum: 25,
		message: '^昵称长度超出限制了'
	}
};

export default {
	userName
};