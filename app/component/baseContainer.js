import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Button } from 'native-base';

type Props = {
    style?: any
}

export default class BaseContainer extends Component<Props> {
    constructor(props){
        super(props)
    }

    render() {
        console.log('go');
        return (
            <Container style={[this.props.style,styles.container]}>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})