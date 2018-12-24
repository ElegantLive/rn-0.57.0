import React from 'react';
import constraints from '../../utils/validate/constraints';
import validate from 'validate.js';

export default function check(mapToConstraints) {
	return function(Comp) {
		class WrapperComp extends React.PureComponent {
			constructor(props) {
				super(props);
				this.constraints = mapToConstraints(constraints);
				this._check = this._check.bind(this);
				this._response = this._response.bind(this);
				this.check = this.check.bind(this);
				this.checkItem = this.checkItem.bind(this);
				this.checkAll = this.checkAll.bind(this);
			}
            
			_check(data, constraints, useAsync = false) {
				return useAsync ? validate.async(data, constraints).then(() => {
					return true;
				}).catch(err => {
					return err;
				}) : this._response(validate(data, constraints));
			}
            
			_response(response) {
				return response ? response : true;
			}

			checkItem(key, useAsync = false) {
				const data = {
					[key]: this.props.state[key]
				};
                
				const constraints = {
					[key]: this.constraints[key]
				};

				return this._check(data, constraints, useAsync);
			}
            
			checkAll(map = [], useAsync = false) {
				let data = {};
				let constraints = {};
				let object = [];
                
				if (typeof map === 'object') object = Object.keys(map);

				if (object.length !== 0) {
					object.map((v) => {
						data[v] = this.props.state[v];
						constraints[v] = this.constraints[v];
					});
				} else {
					data = this.props.state;
					constraints = this.constraints;
				}
                
				return this._check(data, constraints, useAsync);
			}
            
			check(useAsync = false) {
				return this._check(this.props.state, this.constraints, useAsync);
			}
		
			render() {
				return <Comp
					check={this.check}
					checkItem={this.checkItem}
					checkAll={this.checkAll}
					{...this.props}
				/>;
			}
		}
	
		return WrapperComp;
	};
}