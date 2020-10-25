import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { sh, sw } from '~/helpers';
import { colors, space } from '~/constants';
import { Button } from '~/common';
import Icon from 'react-native-vector-icons/FontAwesome5';

const image = { uri: "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" };

export default class DailyExercise extends Component {
    render() {
        return (
            <ImageBackground 
                source={image} 
                style={styles.container}
                resizeMode="cover"
                imageStyle={{ borderRadius: sh(5), opacity: 0.7 }}
            >
                <Text style={styles.title}>
                    Senin için hazırladığımız günlük antrenmanın hazır!
                </Text>
                <Button>
                    Hemen Başla
                </Button>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: sh(30),
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: sh(5),
        marginVertical: sh(5),
        borderRadius: sh(5),
        justifyContent: 'center'
    },
    title: {
        fontSize: sh(6.5),
        color: colors.white,
        marginRight: sh(20),
        fontWeight: '600',
        marginBottom: sh(5)
    }
})
