import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../components/Header';

export default StoryScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Header />
            <TouchableWithoutFeedback>
                <Text>Story Screen</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}