import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {Tab} from 'native-base';

type Props = {
    comp: any,
    ...Tab.propTypes,
}

export default class TabBar extends Component<Props> {
    static propTypes = {
        comp:PropTypes.any.isRequired,
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {
            comp,
            activeTextStyle,
            activeTabStyle,
            textStyle,
            tabStyle,
            tabBarUnderlineStyle,
            ...props
        } = this.props;

        return (
            <Tab
                activeTextStyle={[styles.activeTextStyle,activeTextStyle]}
                activeTabStyle={[styles.activeTabStyle,activeTabStyle]}
                textStyle={[styles.textStyle,textStyle]}
                tabStyle={[styles.tabStyle,tabStyle]}
                tabBarUnderlineStyle={[styles.tabBarUnderlineStyle,tabBarUnderlineStyle]}
                {...props}
            >
                {comp}
            </Tab>
        )
    }
}

const styles = StyleSheet.create({
    activeTextStyle:{
        color:BaseColor.skayBlue
    },
    activeTabStyle:{
        backgroundColor:BaseColor.diytabDefaultBg
    },
    textStyle:{
        color:BaseColor.diyTabBarTextColor
    },
    tabStyle:{
        backgroundColor:BaseColor.diytabDefaultBg,
    },
    tabBarUnderlineStyle:{
        backgroundColor:BaseColor.skayBlue,
    },
})