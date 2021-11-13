import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.headerLeft}>
                    <Entypo name="youtube" size={30} color="red" />
                    <Text style={styles.headerLeftText}>YouTube</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <MaterialIcons style={styles.headerRightIcon} name="live-tv" size={25} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons style={styles.headerRightIcon} name="notifications" size={25} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome
                        style={styles.headerRightIcon}
                        name="search" size={25}
                        color="white"
                        onPress={() => navigation.navigate('search')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="account-circle" size={25} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: "#212529",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLeftText: {
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    headerRightIcon: {
        marginRight: 20,
    }
});