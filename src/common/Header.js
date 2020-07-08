import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, dimensions } from '~/constants';

const { screenHeight } = dimensions;

class Header extends Component {
    render() {
        return (
            <View>
                <Text>
                    Header
                </Text>
            </View>
        )
    }
}

export default Header
