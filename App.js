import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:TransactionScreen},
  Instagram :{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)