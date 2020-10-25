import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import _ from 'lodash'
import { colors, icons } from '~/constants';
import { sh, sw } from '~/helpers';

class Exercise5 extends Component {
    state = {
        active: 0
    }

    componentDidMount() {
        const { speed } = this.props;
        this.interval = setInterval(() => {
            const { active } = this.state;
            const { lengthHorizontal, lengthVertical } = this.props;

            if(active < (lengthHorizontal*lengthVertical) - 1) {
                this.setState({active: active+1})
            } else {
                this.setState({active: 0})
            }
        }, speed);
    }
      
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderBox = (index, active) => {
        const { lengthHorizontal, lengthVertical } = this.props;

        const height = sh(100) / lengthVertical;
        const width = (sw(100) / lengthHorizontal);

        const marginBottom = (sh(110) - sh(100)) / (lengthVertical)

        //const marginBottom = (sh(110) - (height * lengthVertical)) / lengthVertical
        console.log(marginBottom)
        return(
            <View 
                key={index}
                style={[
                    styles.box, 
                    { 
                        height, 
                        width, 
                        marginBottom,
                        backgroundColor: active ? colors.black : colors.gray
                    }
                ]}
            >

            </View>
        )
    }

    renderBoxs = () => {
        const { active } = this.state;
        const { lengthHorizontal, lengthVertical } = this.props;

        var boxs = [];

        for (let index = 0; index < lengthHorizontal * lengthVertical; index++) {
            boxs.push(
                this.renderBox(index, active === index ? true : false)
            );
        }

        return boxs
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    {
                        this.renderBoxs().map((item) => item)
                    }
                </View>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        //alignItems: 'center',
    },
    box: {

    }
})

export default Exercise5;
