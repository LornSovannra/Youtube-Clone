import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { StyleSheet, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import Card from '../components/Card';

export default function SearchScreen() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const navigation = useNavigation()

    const [value, setValue] = useState('')
    const [miniCardData, setMiniCardData] = useState([])

    const fetchData = async () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDHzSYPoS82qjQNzxxXD29-lYMfodnYuB4`)
            .then(res => res.json())
            .then(data => {
                setMiniCardData(data.items)
            })
    }

    return (
        <View style={{flex: 1}}>
            <TouchableWithoutFeedback
                style={styles.container}
                onPress={() => Keyboard.dismiss()}
            >
                <View style={styles.searchWrapper}>
                    <TouchableOpacity>
                        <Ionicons
                            name="chevron-back-outline"
                            size={30}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Seach YouTube"
                        placeholderTextColor= 'white'
                        ref={inputRef}
                        keyboardAppearance='dark'
                        onChangeText={(text) => setValue(text)}
                    />
                    <TouchableOpacity onPress={fetchData}>
                        <FontAwesome name="search" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <FlatList
                keyExtractor={item => item.id.videoId}
                data={miniCardData}
                renderItem={({ item }) => {
                    return (
                        <MiniCard
                            videoId = {item.id.videoId}
                            title = {item.snippet.title}
                            channel = {item.snippet.channelTitle}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    searchWrapper: {
        paddingTop: 35,
        paddingBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#212529',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    searchInput: {
        width: "70%",
        paddingVertical: 10,
        color: 'white',
    }
});