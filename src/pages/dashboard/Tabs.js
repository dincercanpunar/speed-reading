import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, space, backgroundColors } from '~/constants';
import { sh, sw } from '~/helpers'

class Tabs extends Component {
    render() {
        const { activeTab, setActiveTab } = this.props

        const tabs = [
            {
                title: "Anasayfa",
                value: "main"
            },
            {
                title: "Kişisel Antrenmanlar",
                value: "personalExercise"
            },
        ]

        return (
            <View style={styles.container}>
                {
                    tabs.map((item, index) => (
                        <TouchableOpacity 
                            key={index}
                            style={[
                                styles.tab,
                                {
                                    borderColor: activeTab===item.value ? colors.primary : 'transparent',
                                }
                            ]} 
                            onPress={() => setActiveTab(item.value)}
                        >
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginBottom: sh(8),
    },
    tab: {
        flex: 1,
        height: sh(10),
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: sh(5.5)
    }
})

export default Tabs;