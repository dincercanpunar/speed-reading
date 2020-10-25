import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash'
import { colors, icons, letters, space } from '~/constants';
import { sh, sw } from '~/helpers';
import { ExerciseHeader } from '~/common';



class Exercises1 extends Component {
    state = {
        count: 0,
        objects: {
            icons: [],
            letters: []
        }
    }

    getObjects = () => {
        const { lengthHorizontal, lengthVertical } = this.props
        this.setState({
            objects: {
                icons: _.sampleSize(icons, lengthHorizontal * lengthVertical),
                letters: _.sampleSize(letters, lengthHorizontal * lengthVertical)
            }
        });
    }

    componentDidMount() {
        const { lengthHorizontal, lengthVertical, speed } = this.props

        this.getObjects()

        this.interval = setInterval(() => {
            const { count } = this.state;

            if (count < (lengthHorizontal * lengthVertical) - 1) {
                this.setState({ count: count + 1 })
            } else {
                this.setState({ count: 0 })
                this.getObjects()
            }
        }, speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { count, objects } = this.state;
        const { lengthHorizontal, lengthVertical, type, position, trace } = this.props;


        const height =
            (
                position === 'vertical' ?
                    sh(120) - 2 * space.containerPadding - space.headerHeight
                    :
                    sw(120) - 2 * space.containerPadding
            ) / lengthVertical;

        const width = height;

        return (
            <Fragment>
                <ExerciseHeader />
                <View
                    style={[
                        {
                            flex: 1,
                            flexDirection: position === 'vertical' ? 'row' : 'column',
                            //padding: space.containerPadding
                        }
                    ]}
                >
                    {
                        _.range(lengthHorizontal).map((i) => (
                            <View
                                key={i}
                                style={[
                                    styles.container,
                                    {
                                        flexDirection: position === 'vertical' ? 'column' : 'row',
                                        padding: space.containerPadding
                                    }
                                ]}
                            >
                                {

                                    objects[type].slice(i * lengthVertical, (i + 1) * lengthVertical).map((item, index) => (
                                        <View
                                            key={index}
                                            style={[styles.subContainer, { height, width }]}
                                        >
                                            {
                                                type === 'icons' ?
                                                    <Icon
                                                        solid
                                                        name={item}
                                                        size={height * (1 / 2)}
                                                        color={
                                                            (
                                                                trace ?
                                                                    count >= (lengthHorizontal * index + i)
                                                                    :
                                                                    count === (lengthHorizontal * index + i)
                                                            )
                                                                ? colors.black : colors.gray}
                                                    />
                                                :
                                                    <Text
                                                        style={[{
                                                            fontWeight: 'bold',
                                                            fontSize: height * (1 / 2),
                                                            color: (
                                                                trace ?
                                                                    count >= (lengthHorizontal * index + i)
                                                                    :
                                                                    count === (lengthHorizontal * index + i)
                                                            )
                                                                ? colors.black : colors.gray
                                                        }]}
                                                    >
                                                        {item}
                                                    </Text>
                                            }

                                        </View>
                                    ))
                                }
                            </View>
                        ))
                    }
                </View>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    subContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray
    }
})

export default Exercises1;
