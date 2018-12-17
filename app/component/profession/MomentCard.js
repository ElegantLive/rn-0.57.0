import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';
import UserCard from './UserCard';
import LongText from './LongText';
import ImageCard from './ImageCard';
import IconNumsCard from './IconNumsCard';
import { adjustReleaseTime } from '../../utils/functions';

// response json same as a
// const a =  {
//     "id": 1,
//     "top": null,
//     "annex": "IMAGE",
//     "content": "这是我的第8个动态",
//     "create_time": "2018-10-28 16:01:26",
//     "like_num": 0,
//     "review_num": 0,
//     "collect_num": 0,
//     "user": {
//         "id": 5,
//         "name": "狗蛋2",
//         "mobile": "13263995262",
//         "is_verify": "已实名",
//         "header_img": "https://ycc.hnjubi.cn/hnjubi/image/20180928/5c11248cb85d437366623b2720f49178.jpeg",
//         "real_name": "***华",
//         "follow": 0,
//         "fans": 0,
//         "is_follow": false
//     },
//     "annex_file": [
//         {
//             "path": "https://ycc.hnjubi.cn/hnjubi/image/20181028/3c8bc6705c48c28a73378491f86cdbd6.jpeg",
//             "type": "IMAGE",
//             "cover": "https://ycc.hnjubi.cn/hnjubi/image/20181028/3c8bc6705c48c28a73378491f86cdbd6.jpeg"
//         },
//         {
//             "path": "https://ycc.hnjubi.cn/hnjubi/image/20181028/3c8bc6705c48c28a73378491f86cdbd6.jpg",
//             "type": "IMAGE",
//             "cover": "https://ycc.hnjubi.cn/hnjubi/image/20181028/20baef1af0df0667a57b5e7cc0a45a13.jpg"
//         }
//     ],
//     "like": false,
//     "collect": false
// }

export default class MomentCard extends PureComponent {
	constructor(props) {
		super(props);
	}

	render () {
		const { user, id, create_time, like_num, review_num, collect_num, annex_file, like, collent} = this.props;

		const {name, header_img} = user;

		const user_id = user.id;

		return (
			<Card>
				<UserCard 
					avatar={avatar}
					name="NativeBase"
					description={adjustReleaseTime('2018-10-27 12:12:32')}
					right="follow"
					rightPress={() => console.log('press')}
				/>
				<CardItem cardBody>
					<LongText
						text="美食是梵蒂冈和更好发挥过分了\n后挨批额我偶同我\n
                        五月美食是梵蒂冈和更好发挥过分了后挨批\n额我偶同
                        我五月天又热又清热怀疑和广阔的减\n肥茶弄好吧是创新宁波房地
                        更合适的干哈方大化\n工花费更多符合规范化嘎哈购房贷款美食是梵蒂冈和
                        更好发挥过分了后挨批额我偶同我五月天\n又热又清热怀疑和广阔的减肥茶弄好吧
                        是创新宁波房地更合适的干\n方大化工花费更多符
                        合规范化嘎哈购房\n\n贷款美食是
                        梵蒂冈和更好发挥过分了后挨批额我偶同我\n五月天又热
                        又清热怀疑和广阔的\n减肥茶弄好吧是创新宁波房地更合适的干
                        哈方大化工花费更多符合规范化嘎哈购房贷\n款美
                        食是梵蒂冈\n和更
                        好发挥过分了后挨批\n额我偶同我五月
                        天又热又清热\n怀疑和广阔的减肥茶弄好吧是创新宁波房地更合适
                        的干哈方大\n化工花费更\n多符合规范化嘎哈购房贷款美食是梵蒂冈和更好发挥过分了后挨
                        批额我偶同我五月天又热又清热怀疑和广阔的减肥茶弄好吧是创新
                        宁波房地更合适的干哈方大化\n工
                        花费更多符合\n规范化嘎哈购房贷款天又热又清热
                        怀疑和广阔的减肥\n茶弄好
                        吧是创新宁波房地更合适的干哈方大化工花
                        费更多符合规\n范化嘎哈
                        购房贷款"
					/>
				</CardItem>
				<CardItem
					cardBody
					style={styles.ImageCard}
				>
					<ImageCard
						images = {list}
					/>
				</CardItem>
				<IconNumsCard
					item = {[
						{icon: {name: 'star-o', type: 'FontAwesome'}, activeIcon: {name: 'star', type: 'FontAwesome'}, active: true, nums: 233},
						{icon: {name: 'thumbs-o-up', type: 'FontAwesome'}, activeIcon: {name: 'thumbs-up', type: 'FontAwesome'}, active: true, nums: 233},
						{icon: {name: 'comment-o', type: 'FontAwesome'}, activeIcon: {name: 'comment', type: 'FontAwesome'}, active: true, nums: 233},
					]}
				/>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	ImageCard: {
		width: SCREEN_WIDTH,
		flexWrap: 'wrap',
		display: 'flex',
		flexDirection: 'row',
	}
});