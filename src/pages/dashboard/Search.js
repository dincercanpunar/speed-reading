import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { sh, sw } from '~/helpers';
import { colors, space } from '~/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon 
                    solid
                    name="search"
                    size={sh(12)*(1/3)} 
                    color={'#FE8537'}
                    style={styles.icon}
                />
                <TextInput style={styles.textInput} placeholder="Search" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: sh(12),
        backgroundColor: '#F3F4F9',
        alignItems: 'center',
        padding: sh(5),
        borderRadius: sh(5),
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: sh(5),
    },
    textInput: {
        flex: 1,
        padding: 0,
        fontSize: sh(12) * (1/4),
        textDecorationLine: 'none',
    }
})
