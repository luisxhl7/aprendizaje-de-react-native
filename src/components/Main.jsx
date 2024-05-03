import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHubs</Text>
      <RepositoryList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center', 
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Main