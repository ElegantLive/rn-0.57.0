import React, { Component } from 'react';
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
    };

    constructor(props) {
        super(props);
        this._goDetail = this._goDetail.bind(this);
    }

    _goDetail(list,index) {
        const images = list.map((v, k) => { return { url: v.source.uri } });

        NavigationService.navigate("PictureDetail",{ images, index });
    }

    render () {
        const { images } = this.props;

        return images.map((v,k) => {
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
    }
}