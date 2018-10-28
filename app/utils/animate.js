import { Easing, Animated }  from 'react-native';

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
        //沿Y轴平移
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
        });
        //透明度
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateY }] };
    },
})

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
        //沿X轴平移
        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Width, 0, -(Width - 10)],
        });
        //透明度
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        });
        return {opacity, transform: [{translateX}]};
    }
})

export {
    forHorizontalLeft,
    forVerticalTop
}