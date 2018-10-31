import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { CardItem, Left, Button, Icon, Text, Body } from 'native-base';
import PropTypes from 'prop-types';

type Props = {
	item:Array,
	indent?:Number,
	cardStyle?:any
}

export default class IconNumsCard extends PureComponent <Props> {
    static propTypes = {
        item:PropTypes.array.isRequired,
        indent:PropTypes.number,
	}
	
	static defaultProps = {
		indent:0,
		cardStyle:{}
	}

	_renderItem = (item,k) => {
		return (
			<Button 
				transparent
				key={k}
				style={[styles.btnStyle,(item.btnStyle ? item.btnStyle: null)]}
			>
				<Icon
					name={item.active ? item.activeIcon.name:item.icon.name}
					type={item.active ? item.activeIcon.type:item.icon.type}
					fontSize={30}
					style={[styles.iconStyle,(item.iconStyle ? item.iconStyle: null)]}
				/>
				<Text
					style={[styles.numsStyle,(item.numsStyle ? item.numsStyle: null)]}
					fontSize={30}
				>
					{item.nums}
				</Text>
			</Button>
		)
	}

	render() {
		const { indent,item,cardStyle }  = this.props;

		const indentView = this._renderItem(item[indent],'indent');

		const itemView = item.map((v,k) => {
			return (k === indent) ? null: this._renderItem(v,k);
		});

		return (
			<CardItem
				style={[styles.card,cardStyle]}
			>
				<Left style={styles.view}>
					{indentView}
				</Left>
				<Body style={styles.view}>
					{itemView}
				</Body>
			</CardItem>
		)
	}
}

const styles = StyleSheet.create({
	card:{
		flexDirection:"row",
	},
	view:{
		flexDirection:"row",
		justifyContent:"center",
	},
	iconStyle :{
		marginRight:0
	},
	numsStyle :{
		paddingLeft:5
	},
	btnStyle:{
		justifyContent:"center",
		fontSize:30
	}
})