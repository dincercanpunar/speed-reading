import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { sh, sw } from '~/helpers'
import { colors } from '~/constants';

class Dashboard extends Component {
    render() {
        const { navigate } = this.props.navigation;

        const exercises = [
            {
                id: "Exercise1",
                title: "Açılan Nesneler: Dikey"
            },
            {
                id: "Exercise2",
                title: "Açılan Nesneler: Yatay"
            },
            {
                id: "Exercise3",
                title: "Büyüyen Nesneler: Çember"
            },
        ]

        return (
            <View style={styles.container}>
            {
                exercises.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate('Exercise', {
                            exerciseId: item.id
                        })}
                    >
                        <View style={styles.box}>
                            <Text>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingVertical: sh(5),
        backgroundColor: colors.white,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: sw(100),
        height: sh(6),
        marginBottom: sh(2),
        backgroundColor: colors.gray
    }
})

export default withNavigation(Dashboard)
