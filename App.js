import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ExploreScreen from './screens/ExploreScreen';
import SubscribeScreen from './screens/SubscribeScreen';
import LibraryScreen from './screens/LibraryScreen';
import UploadScreen from './screens/UploadScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()

  const Root = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#212529',
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Entypo name="home" size={24} color={focused ? 'red' : 'white'} />
              <Text style={styles.tabText}>Home</Text>
            </View>
          )
        }} />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
          tabBarIcon: ({ focused }) => (
            <TouchableWithoutFeedback>
              <View style={styles.container}>
                <MaterialIcons name="movie-filter" size={24} color={focused ? 'red' : 'white'} />
                <Text style={styles.tabText}>Story</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }} />
        <Tab.Screen name="Upload" component={UploadScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Ionicons name="md-add-circle-outline" size={45} color={focused ? 'red' : 'white'} />
            </View>
          )
        }} />
        <Tab.Screen name="Subscribe" component={SubscribeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <MaterialIcons name="subscriptions" size={24} color={focused ? 'red' : 'white'} />
              <Text style={styles.tabText}>Subscriptions</Text>
            </View>
          )
        }} />
        <Tab.Screen name="Library" component={LibraryScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Entypo name="folder-video" size={24} color={focused ? 'red' : 'white'} />
              <Text style={styles.tabText}>Library</Text>
            </View>
          )
        }} />
      </Tab.Navigator>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="rootHome" component={Root} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 8,
    marginTop: 5,
  }
});