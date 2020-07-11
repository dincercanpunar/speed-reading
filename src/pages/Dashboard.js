import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { sh, sw } from '~/helpers'
import { withNavigation } from 'react-navigation'

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
        ]

        return (
            <View>
            {
                exercises.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate('Exercise', {
                            exerciseId: item.id
                        })}
                    >
                        <Text>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        )
    }
}

export default withNavigation(Dashboard)
