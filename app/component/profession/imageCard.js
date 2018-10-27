import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// import { View } from 'native-base';
import CustomImage from '../base/customImage';

type Props = {
    imageList: array,
    itemStyle?: any
}

export default class ImageCard extends Component <Props> {
    static propTypes = {
        imageList:PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.func
        ]).isRequired,
    }

    constructor(props) {
        super(props);
    }

    render () {
        const { imageList } = this.props;

        const view =  imageList.map((v,k) => {
            return <CustomImage
                key={k}
                source={v.source}
                style ={v.style}
            />
        });

        return view;
    }
}

const styles = StyleSheet.create({
    container:{
        // flexWrap:"wrap"
    }
})