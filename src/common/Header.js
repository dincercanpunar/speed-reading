import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, space } from '~/constants';
import { sh, sw } from '~/helpers';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.topText}>HIZLI</Text>
                    <Text style={styles.bottomText}>OKUMA</Text>
                </View>
                <Image 
                    style={styles.image}
                    source={{
                        uri: 'https://images.pexels.com/photos/4065866/pexels-photo-4065866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: sh(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: space.containerPadding
    },
    topText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#636C83'
    },
    bottomText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    image: {
        height: sh(11),
        width: sh(11),
        borderRadius: sh(5),
    }
})

export default Header
