import React, { Component } from 'react'
import exercises from './exercises'

class Exercise extends Component {
    render() {
        const { getParam } = this.props.navigation;

        console.log(this.props.navigation.state.params.statuses)
        

        const exerciseId = getParam('exerciseId', 'NO-ID');
        const statuses = this.props.navigation.state.params.statuses;

        console.log("statuses: ", statuses)
        const SelectedExercise = exercises[exerciseId];

        return (
            <SelectedExercise {...statuses} />
        )
    }
}

export default Exercise;
