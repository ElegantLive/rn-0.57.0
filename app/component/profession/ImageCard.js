import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CustomImage from '../base/CustomImage';
import { Button } from 'native-base';
import NavigationService from '../../utils/navigation/service';

export default class ImageCard extends Component <Props> {
    static propTypes = {
        images:PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.func
        ]).isRequired,
    }

    _goDetail = (list,index) => {
        const images = list.map((v, k) => { return { url: v.source.uri } });

        NavigationService.navigate("PictureDetail",{ images, index });
    }

    constructor(props) {
        super(props);
    }

    render () {
        const { images } = this.props;

        const view =  images.map((v,k) => {
            return (
                <Button
                    key={k}
                    transparent
                    onPress={() => this._goDetail(images,k)}
                    rounded
                    style ={v.viewStyle}
                >
                    <CustomImage
                        source={v.source}
                        style ={v.style}
                    />
                </Button>
            )
        });

        return view;
    }
}

const styles = StyleSheet.create({
    container:{
        // flexWrap:"wrap"
    }
})