import { PermissionsAndroid } from 'react-native';
import { showMessage } from 'react-native-flash-message';

// all permissions for android
// | "android.permission.READ_CALENDAR"
// | "android.permission.WRITE_CALENDAR"
// | "android.permission.CAMERA"
// | "android.permission.READ_CONTACTS"
// | "android.permission.WRITE_CONTACTS"
// | "android.permission.GET_ACCOUNTS"
// | "android.permission.ACCESS_FINE_LOCATION"
// | "android.permission.ACCESS_COARSE_LOCATION"
// | "android.permission.RECORD_AUDIO"
// | "android.permission.READ_PHONE_STATE"
// | "android.permission.CALL_PHONE"
// | "android.permission.READ_CALL_LOG"
// | "android.permission.WRITE_CALL_LOG"
// | "com.android.voicemail.permission.ADD_VOICEMAIL"
// | "android.permission.USE_SIP"
// | "android.permission.PROCESS_OUTGOING_CALLS"
// | "android.permission.BODY_SENSORS"
// | "android.permission.SEND_SMS"
// | "android.permission.RECEIVE_SMS"
// | "android.permission.READ_SMS"
// | "android.permission.RECEIVE_WAP_PUSH"
// | "android.permission.RECEIVE_MMS"
// | "android.permission.READ_EXTERNAL_STORAGE"
// | "android.permission.WRITE_EXTERNAL_STORAGE";
const message = {
	[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]: '存储权限',
	[PermissionsAndroid.PERMISSIONS.CAMERA]: '相机权限',
};

const defaultOptions = {
	errorNotice: true,
	message: '操作失败',
	description: '请确保您允许飘飘访问',
};

const requestPermission = async (key, options = defaultOptions) => {
	const writeAuth = await PermissionsAndroid.request(key);

	if (true !== options.errorNotice) return writeAuth;

	if ('granted' !== writeAuth) {
		showMessage({
			message: options.message,
			description: options.description + message[key],
			type: 'danger',
			icon: 'danger'
		});
		return false;
	}
};

const checkPermission = async (key) => {
	return await PermissionsAndroid.check(key);
};

export {
	requestPermission,
	checkPermission,
};