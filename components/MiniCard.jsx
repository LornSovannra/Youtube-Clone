import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function MiniCard( props ) {
    const [data, setData] = useState([])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardTop}>
                <Image style={styles.cardThumbnail} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} />
            </View>
            <View style={styles.cardBottom}>
                <View style={styles.cardBottomLeft}>
                    <MaterialIcons name="account-circle" size={50} color="black" />
                </View>
                <View style={styles.cardBottomRight}>
                    <View>
                        <Text
                            numberOfLines={2}
                            style={{
                                width: Dimensions.get("screen").width/1.3,
                                fontWeight: '600',
                                marginBottom: 5
                            }}
                        >
                            {props.title}
                        </Text>
                    </View>
                    <View style={styles.cardDetails}>
                        <Text>{ props.channel } • </Text>
                        <Text>100M views • </Text>
                        <Text>1 minute ago</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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