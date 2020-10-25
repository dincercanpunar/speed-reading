import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { sh, sw } from '~/helpers';
import { colors, space, boxColors } from '~/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';


class Box extends Component {
    render() {
        const { item, index } = this.props;
        const { navigate } = this.props.navigation;

        console.log(item)

        return (
            <TouchableOpacity
                onPress={() => navigate('Exercise', {
                    exerciseId: item.id,
                    statuses: item.statuses
                })}
            >
                <View style={[
                    styles.box, { 
                        backgroundColor: boxColors[index % boxColors.length].light
                    }]
                }>
                    <View style={[
                        styles.image, {
                            backgroundColor: boxColors[index % boxColors.length].dark
                        }]
                    }>
                        <Icon 
                            solid
                            name="seedling"
                            size={sh(12)*(1/3)} 
                            color={'#FE8537'}
                            style={styles.icon}
                        />
                    </View>
                    <View>
                        <Text>
                            {item.title}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                item.icons.map((item, index) => (
                                    <Icon 
                                        solid
                                        name={item}
                                        key={index}
                                        size={sh(12)*(1/3)} 
                                        color={'#FE8537'}
                                        style={styles.icon}
                                    />
                                ))
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Box);

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: sh(15),
        marginBottom: sh(5),
        borderRadius: sh(5),
        padding: sh(5)
    },
    image: {
        height: sh(15) - 2*sh(5),
        width: sh(15) - 2*sh(5),
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: sh(5),
        marginRight: sh(5)
    },
    icon: {
        marginTop: sh(4),
        marginRight: sh(4)
    }
})
