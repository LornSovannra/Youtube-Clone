import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'

export default function Filter() {
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.container} horizontal={true}>
            <TouchableWithoutFeedback style={styles.filterComponentWrapper} onPress={() => navigation.navigate('explore')}>
                <View style={styles.filterComponent}>
                    <Text style={styles.filterText}>Explore</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>All</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>New to you</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>Mixes</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>Music</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>JavaScript</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>Computer Programming</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>Crytocurrency</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>E-commerce</Text>
            </View>
            <View style={styles.filterWrapper}>
                <Text style={styles.filterText}>User interface design</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212529',
        paddingVertical: 15,
    },
    filterComponentWrapper: {
        borderRightWidth: 1,
        borderColor: 'gray',
    },
    filterComponent: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    filterWrapper: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    filterText: {
        color: 'white',
    }
});