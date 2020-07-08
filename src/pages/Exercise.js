import React, { Component } from 'react'
import { Text, View } from 'react-native'
import exercises from './exercises'

class Exercise extends Component {
    render() {
        const { getParam } = this.props.navigation;

        const exerciseId = getParam('exerciseId', 'NO-ID');

        const SpecificStory = exercises[exerciseId];

        return (
            <SpecificStory />
        )
    }
}

export default Exercise;
