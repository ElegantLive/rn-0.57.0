import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import RootRoute from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import { SharedElementRenderer } from 'react-native-motion';
import CodePush from 'react-native-code-push';
import './utils/request/axios';
import './utils/validate/validate';

@CodePush
export default class App extends Component {
	constructor(props) {
		super(props);
		this.navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;
	}

	componentDidMount() {
		SplashScreen.hide();
	}
	
	render () {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<SharedElementRenderer>
						<RootRoute
							persistenceKey={this.navigationPersistenceKey}
						/>
						<FlashMessage
							position="top"
							floating={true}
							autoHide={true}
						/>
					</SharedElementRenderer>
				</PersistGate>
			</Provider>
		);
	}
}