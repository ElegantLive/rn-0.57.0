import axios from 'axios';
import FetchBlob from 'rn-fetch-blob';
import { baseUrl } from '../config/config';
import { CameraRoll, PermissionsAndroid } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { requestPermission } from '../system/requestPermissionsAndroid';

const sendCode = async (mobile) => {
	const res = await axios.get('send_code', {
		params: {mobile},
		baseURL: baseUrl
	});

	if (res.error_code === 0) showMessage({
		message: '短信验证码已发出',
		type: 'success',
		icon: 'success'
	});
};

const savePhoto = (url) => {
	Android ? saveToAndroidLocal(url) : saveToIosLocal(url);
};

const saveToAndroidLocal = async (url) => {
	// check for android's write file to localstorage
	await requestPermission(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
	// await requestPermission(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
	// await requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA);

	const Dirs = FetchBlob.fs.dirs;
	// url最后一个反斜线的位置
	const lastIndex = url.lastIndexOf('/');
	// 通过位置得到图片名称
	const imageName = url.substr(lastIndex);

	const path = Dirs.DCIMDir + imageName;

	const config = {
		fileCache: true,
		path
	};

	try {
		// 下载图片
		await FetchBlob.config(config)
			.fetch('GET', url)
			.then(() => FetchBlob.fs.scanFile([ { path } ]))
			.catch((e) => {
				console.log(e);
			});

		showMessage({
			message: '已保存',
			description: path,
			type: 'success',
			icon: 'success'
		});
	} catch (e) {
		showMessage({
			message: '保存失败了',
			description: '请稍后再试',
			type: 'danger',
			icon: 'danger'
		});
	}
};

const saveToIosLocal = async (url) => {
	try {
		await CameraRoll.saveToCameraRoll(url, 'photo');
		showMessage({
			message: '已保存',
			type: 'success',
			icon: 'success'
		});
	} catch (e) {
		console.log(e);
		showMessage({
			message: '保存失败了',
			description: '请确保您允许飘飘访问图像存储权限',
			type: 'danger',
			icon: 'danger'
		});
	}
};

export {
	sendCode,
	savePhoto
};