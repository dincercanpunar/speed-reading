import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { sh, sw } from '~/helpers';
import { colors, space } from '~/constants';


export default class Search extends Component {
    render() {
        const { children } = this.props;
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: sh(10),
        width: sh(25),
        backgroundColor: '#FF7F2D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: sh(5),
        borderRadius: sh(5),
        flexDirection: 'row'
    },
    text: {
        fontSize: sh(5.5),
        fontWeight: 'bold',
        color: colors.white
    }
})
