import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';
import { colors, space } from '~/constants';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Icon 
                        solid
                        name="arrow-left"
                        size={space.headerHeight*(1/2)} 
                        color={colors.black}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: space.headerHeight,
        backgroundColor: colors.white,
        elevation: 2
    },
    button: {
        height: space.headerHeight,
        width: space.headerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default withNavigation(Header);
