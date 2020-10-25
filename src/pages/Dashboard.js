import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { sh, sw } from '~/helpers'
import { colors, space, backgroundColors } from '~/constants';
import { Header } from '~/common';
import {
    Box,
    DailyExercise,
    Search,
    SpeedTestCard,
    Tabs
} from './dashboard';

class Dashboard extends Component {
    state = {
        activeTab: "main"
    }

    setActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }

    render() {
        const { activeTab } = this.state;

        const exercises = [
            {
                id: "Exercise1",
                title: "Açılan İzli Nesneler: Dikey",
                statuses: {
                    type: 'icons',
                    position: "vertical",
                    trace: true,
                    lengthHorizontal: 1,
                    lengthVertical: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise1",
                title: "Açılan İzsiz Nesneler: Dikey",
                statuses: {
                    type: 'icons',
                    position: "vertical",
                    trace: false,
                    lengthHorizontal: 3,
                    lengthVertical: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise1",
                title: "Açılan Nesneler: Yatay",
                statuses: {
                    type: 'icons',
                    position: "horizontal",
                    lengthHorizontal: 2,
                    lengthVertical: 5,
                    speed: 100
                },
                icons: ["eye"]
            },
            {
                id: "Exercise1",
                title: "Açılan Harfler: Dikey",
                statuses: {
                    type: 'letters',
                    position: "vertical",
                    lengthHorizontal: 3,
                    lengthVertical: 10,
                    speed: 100
                },
                icons: ["eye"]
            },
            {
                id: "Exercise1",
                title: "Açılan Harfler: Yatay",
                statuses: {
                    type: 'letters',
                    position: "horizontal",
                    lengthHorizontal: 3,
                    lengthVertical: 10,
                    speed: 100
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Nesneler: Çember",
                statuses: {
                    type: 'circle',
                    trace: false,
                    continuous: false,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Sürekli Nesneler: Çember",
                statuses: {
                    type: 'circle',
                    trace: false,
                    continuous: true,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Nesneler: Kare",
                statuses: {
                    type: 'square',
                    trace: false,
                    continuous: false,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Sürekli Nesneler: Kare",
                statuses: {
                    type: 'square',
                    trace: false,
                    continuous: true,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen İzli Nesneler: Çember",
                statuses: {
                    type: 'circle',
                    trace: true,
                    continuous: false,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Sürekli İzli Nesneler: Çember",
                statuses: {
                    type: 'circle',
                    trace: true,
                    continuous: true,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen İzli Nesneler: Kare",
                statuses: {
                    type: 'square',
                    trace: true,
                    continuous: false,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            {
                id: "Exercise2",
                title: "Büyüyen Sürekli İzli Nesneler: Kare",
                statuses: {
                    type: 'square',
                    trace: true,
                    continuous: true,
                    length: 10,
                    speed: 200
                },
                icons: ["eye"]
            },
            // {
            //     id: "Exercise3",
            //     title: "Göz Egzersizleri: Kolonlar",
            //     statuses: {
            //         lengthHorizontal: 2,
            //         lengthVertical: 10,
            //         speed: 200
            //     },
            //     icons: ["eye"]
            // },
        ]

        return (
            <ScrollView>
                <Header />
                <View style={styles.container}>
                    <Tabs
                        activeTab={activeTab} 
                        setActiveTab={this.setActiveTab} />
                    {
                        activeTab === "personalExercise" ?
                            <Fragment>
                                <Search />
                                {/* <Text style={styles.title}>Bireysel Antrenmanlar</Text> */}
                                <View style={styles.exercises}>
                                {
                                    exercises.map((item, index) => (
                                        <Box 
                                            key={index} 
                                            item={item}
                                            index={index}
                                        />
                                    ))
                                }
                                </View>
                            </Fragment>
                        :
                            <Fragment>
                                <DailyExercise />
                                <SpeedTestCard />
                            </Fragment>
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: space.containerPadding,
        paddingBottom: space.containerPadding,
        backgroundColor: colors.white,
    },
    exercises: {
        flex: 1,
        marginTop: sh(8)
    },
    
    title: {
        fontSize: sh(6.1),
        fontWeight: '600',
        marginVertical: sh(5)
    }
})

export default Dashboard
