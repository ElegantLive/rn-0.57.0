import React, { PureComponent } from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet } from 'react-native';

export default class Empty extends PureComponent {
    render() {
        return (
            <View style={[styles.panel, {
                width: width,
                height: height,
            }]}>
                <View style={styles.picBlock}>
                    <Image source={styles.picUrl}/>
                </View>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>你的网络好像不给力</Text>
                    <Text style={styles.text}>点击按钮刷新</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.props.onClickRefresh}>
                    <Text style={styles.buttonText}>刷新</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    panel:{

    },
    picBlock:{

    },
    picUrl:{

    },
    textBlock:{

    },
    text:{

    },
    button:{

    },
    buttonText:{

    }
})