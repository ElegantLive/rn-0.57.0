import React from 'react';
import { connect } from 'react-redux';

export default function form(initState = {}, initAction = {}) {
	return function(Comp) {
		@connect(
			state => {
				const data = (typeof initState === 'string') ? state[initState]: initState;
				return { state: data }
			},
			initAction
		)
		class WrapperComp extends React.PureComponent {
			constructor(props) {
				super(props);
				this.state = props.state;
				this._handleChange = this._handleChange.bind(this);
			}
		
			_handleChange(key, value) {
				this.setState({
					[key]: value
				});
			}
		
			render() {
				const { state, ...props } = this.props;
				return <Comp
					_handleChange={this._handleChange}
					state={this.state}
					{...props}
				/>;
			}
		}
	
		return WrapperComp;
	}
}