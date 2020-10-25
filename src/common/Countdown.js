import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { sh, sw } from '~/helpers'
import { colors } from '~/constants';

class Countdown extends Component {
    state = {
        count: this.props.value
    }

    componentDidMount() {
        const { after } = this.props;

        this.interval = setInterval(() => {
            const { count } = this.state;

            if (count > 0) {
                this.setState({ count: count - 1 });
            } else {
                clearInterval(this.interval);
                after()
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { count } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>{count}</Text>
                </View>
            </View>
        )
    }
}

const circleSize = sw(35);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subContainer: {
        height: circleSize,
        width: circleSize,
        borderRadius: circleSize/2,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: circleSize*(1/3),
        color: colors.white,
        fontWeight: 'bold',
    }
})

export default Countdown;