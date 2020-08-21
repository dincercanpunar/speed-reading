import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import _ from 'lodash'
import { colors } from '~/constants';
import { sh, sw } from '~/helpers';

const length = 10;
const speed = 500;

class Exercise3 extends Component {
    state = {
        count: 0,
        circles: null
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { count } = this.state;

            if(count < length - 1) {
                this.setState({count: count+1})
            } else {
                this.setState({count: 0})
            }
        }, speed);
    }
      
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderCircle = (children, size, active) => {
        return(
            <View 
                style={[
                    styles.circle, 
                    { 
                        height: size, 
                        width: size, 
                        borderColor: active ? colors.black : colors.gray
                    }
                ]}
            >
                {children}
            </View>
        )
    }

    renderCircles = () => {
        const { count } = this.state;
        var circles = null;

        for (let index = 0; index < length; index++) {
            const height = sw(100)/length;
            circles = 
                this.renderCircle(
                    circles, 
                    index*height, 
                    count >= index ? true : false
                )
        }

        return circles
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                {
                    this.renderCircles()
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white,
    },
    subContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: sw(100),
        height: sw(100),
        backgroundColor: colors.gray
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        //borderRadius: 1000
    }
})

export default Exercise3;
