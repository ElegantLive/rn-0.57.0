import React from 'react';
import { BackHandler } from 'react-native';
import { showMessage } from 'react-native-flash-message';

export default function backHandler(Comp) {
	return class BackHandlerComp extends React.PureComponent {
		constructor(props) {
			super(props);
			this.onBackButtonPressAndroid = this.onBackButtonPressAndroid.bind(this);
			this.unSubscribeHandler = this.unSubscribeHandler.bind(this);
			this.subscribeHandler = this.subscribeHandler.bind(this);
		}

		componentDidMount() {
			const { addListener } = this.props.navigation;
			addListener('willBlur', this.unSubscribeHandler);
			addListener('didFocus', this.subscribeHandler);
		}
        
		subscribeHandler() {
			BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
		}
        
		unSubscribeHandler() {
        	BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
		}
	
		onBackButtonPressAndroid() {
			const grandParent = this.props.navigation.dangerouslyGetParent().dangerouslyGetParent();
			// if the drawer is opened, do nothing
			if (grandParent.state.isDrawerOpen) return false;
    
			// if user press again in next 2's, the application will quit
			if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) return false;
    
			this.lastBackPressed = Date.now();
			showMessage({
				message: 'press again the application will quit',
				type: 'info',
				position: 'bottom'
			});
			return true;
		}

		render () {
			return <Comp />;
		}
	};
}