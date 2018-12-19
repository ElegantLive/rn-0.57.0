import { Easing, Animated }  from 'react-native';

// use fadeTranslate Screen array
const FadeTranslate = [
	'PictureDetail',
];

const forVerticalTop = () => ({
	transitionSpec: {
		duration: 300,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
	},
	screenInterpolator: sceneProps => {
		const { layout, position, scene } = sceneProps;
		const { index } = scene;

		const height = layout.initHeight;
		const translateY = position.interpolate({
			inputRange: [index - 1, index, index + 1],
			outputRange: [height, 0, 0],
		});
		const opacity = position.interpolate({
			inputRange: [index - 1, index - 0.99, index],
			outputRange: [0, 1, 1],
		});
		return { opacity, transform: [{ translateY }] };
	},
});

const forHorizontalLeft = () => ({
	transitionSpec: {
		duration: 300,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
	},
	screenInterpolator: sceneProps => {
		const {layout, position, scene} = sceneProps;
		const {index} = scene;
		const Width = layout.initWidth;
		const translateX = position.interpolate({
			inputRange: [index - 1, index, index + 1],
			outputRange: [Width, 0, -(Width - 10)],
		});
		const opacity = position.interpolate({
			inputRange: [index - 1, index - 0.99, index],
			outputRange: [0, 1, 1],
		});
		return {opacity, transform: [{translateX}]};
	}
});

const forFade = () => ({
	transitionSpec: {
		duration: 300,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
	},
	screenInterpolator: sceneProps => {
		const { scene, position } = sceneProps;
		const { index } = scene;
		const opacity = position.interpolate({
			inputRange: [index - 1, index, index + 1],
			outputRange: [0, 1, 0],
		});
		return { opacity };
	}
});

const screenTranslate = () => ({
	transitionSpec: {
		duration: 300,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
	},
	screenInterpolator: sceneProps => {
		const { layout, position, scene, scenes } = sceneProps;
		const { index } = scene;
		const Width = layout.initWidth;

		let isFade = false;

		scenes.map(({ route }) => {
			if (FadeTranslate.includes(route.routeName)) isFade = true;
		});
		
		const opacity = isFade ? position.interpolate({
			inputRange: [index - 1, index, index + 1],
			outputRange: [0, 1, 0],
		}) : position.interpolate({
			inputRange: [index - 1, index - 0.99, index],
			outputRange: [0, 1, 1],
		});

		const translateX = isFade ? null : position.interpolate({
			inputRange: [index - 1, index, index + 1],
			outputRange: [Width, 0, -(Width - 10)],
		});
		return isFade ? { opacity } : {opacity, transform: [{translateX}]};
	}
});

export {
	forHorizontalLeft,
	forVerticalTop,
	forFade,
	screenTranslate
};