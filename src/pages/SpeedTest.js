import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Countdown } from '~/common';
import { sh, sw } from '~/helpers'
import { colors, space } from '~/constants';

const text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'

class SpeedTest extends Component {
    state = {
        status: 'countdown'
    }

    setStatus = () => {
        this.setState({ status: 'start' });
    }

    render() {
        const { status } = this.state;

        return (
            <View style={styles.container}>
                {
                    status === 'countdown' ?
                        <Countdown
                            value={3}
                            after={this.setStatus}
                        />
                    :
                        <Fragment>
                            
                            <ScrollView>
                                <View style={styles.subContainer}>
                                    <Text style={styles.text}>{text}</Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button>
                                        Tamamladım!
                                    </Button>
                                </View>
                            </ScrollView>
                        </Fragment>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        padding: space.containerPadding/2,
        margin: space.containerPadding,
        borderWidth: 1,
        borderColor: colors.gray
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: space.containerPadding
    },
    text: {
        fontSize: sh(5.8),
        color: colors.black
    }
})

export default SpeedTest;