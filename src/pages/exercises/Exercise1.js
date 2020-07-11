import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash'
import { colors } from '~/constants';
import { sh, sw } from '~/helpers';

const length = 10;
const speed = 500;

const icons = [
    "apple-alt",
    "bomb",
    "broom",
    "bus",
    "cannabis",
    "carrot",
    "chess-knight",
    "cloud-moon",
    "coffee",
    "couch",
    "crown",
    "crow",
    "dog",
    "fish",
    "frog",
    "hammer",
    "hamburger"
]

class Exercises1 extends Component {
    state = {
        count: 0,
        objects: []
    }

    getObjects = () => {
        this.setState({ 
            objects: _.sampleSize(icons, length) 
        });
    }

    componentDidMount() {
        this.getObjects()

        this.interval = setInterval(() => {
            const { count } = this.state;

            if(count < length - 1) {
                this.setState({count: count+1})
            } else {
                this.setState({count: 0})
                this.getObjects()
            }
        }, speed);
    }
      
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { count, objects } = this.state;
        const height = sh(100)/length;
        const width = height;

        return (
            <View style={styles.container}>
                {
                    objects.map((item, index) => (
                        <View 
                            key={index} 
                            style={[styles.subContainer, { height, width }]}
                        >
                            <Icon 
                                solid
                                name={item}
                                size={height*(1/2)} 
                                color={count >= index ? colors.black : colors.gray}
                            />
                        </View>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white,
    },
    subContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: sw(30),
        height: sh(100),
        backgroundColor: colors.gray
    }
})

export default Exercises1;
