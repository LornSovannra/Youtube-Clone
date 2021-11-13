import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Card from '../components/Card'
import Filter from '../components/Filter'
import Header from '../components/Header'

export default function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <Header />
            <ScrollView>
                <Filter />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    )
}