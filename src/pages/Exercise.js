import React, { Component } from 'react'
import exercises from './exercises'

class Exercise extends Component {
    render() {
        const { getParam } = this.props.navigation;

        const exerciseId = getParam('exerciseId', 'NO-ID');
        const SelectedExercise = exercises[exerciseId];

        return (
            <SelectedExercise />
        )
    }
}

export default Exercise;
