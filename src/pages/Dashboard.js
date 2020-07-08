import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { sh, sw } from '~/helpers'

class Dashboard extends Component {
    render() {
        const exercises = [
            {
                title: "Açılan Nesneler: Dikey"
            }
        ]

        return (
            <View>
            {
                exercises.map((item, index) => (
                    <TouchableOpacity
                        key={index}
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

export default Dashboard
