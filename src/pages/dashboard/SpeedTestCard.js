import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { withNavigation } from 'react-navigation';

class SpeedTestCard extends Component {
    render() {
        return (
            <View>
                <Button 
                    title="test yap"
                    onPress={() => this.props.navigation.navigate('SpeedTest')}
                />
            </View>
        )
    }
}

export default withNavigation(SpeedTestCard);