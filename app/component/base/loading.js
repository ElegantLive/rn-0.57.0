import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import {Spinner} from 'native-base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let sibling = undefined

const Loading = {

  show: () => {
    sibling = new RootSiblings(
      <View style={styles.maskStyle}>
        <View style={styles.backViewStyle}>
            <Spinner />
        </View>
      </View>
    )
  },

  hidden: ()=> {
    if (sibling instanceof RootSiblings) {
      sibling.destroy()
    }
  }
}

const styles = StyleSheet.create({
    maskStyle: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    backViewStyle: {
      backgroundColor: '#fff',
      width: 120,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    }
  }
)

export {Loading}