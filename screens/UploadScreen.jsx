import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../components/Header';

export default UploadScreen = () => {
    return (
        <View>
            <Header />
            <TouchableWithoutFeedback>
                <Text>Upload Screen</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}