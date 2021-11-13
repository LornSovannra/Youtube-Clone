import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MiniCard from './MiniCard';

export default function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=video&type=video&key=AIzaSyDHzSYPoS82qjQNzxxXD29-lYMfodnYuB4`)
            .then(res => res.json())
            .then(data => {
                setData(data.items)
            })
    }, [])

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id.videoId}
                data={data}
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
        marginVertical: 5,
    },
    cardThumbnail: {
        width: '100%',
        height: 200,
    },
    cardBottom: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    cardBottomRight: {
        marginLeft: 5,
    },
    cardDetails: {
        flexDirection: 'row',
    },
    caption: {
        fontWeight: 'bold',
    }
});