import validate from 'validate.js';

validate.options = {
	format: 'flat'
};
validate.async.options = {
	format: 'flat',
	cleanAttributes: false
};
// validate.validators.presence.options = {
//     message: "不能为空"
// };