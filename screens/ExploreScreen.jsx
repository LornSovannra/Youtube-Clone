import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../components/Header';

export default ExploreScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Header />
            <Text>Explore Screen</Text>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}