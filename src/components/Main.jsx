import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize:30}}>GitHubs</Text>
        <RepositoryList/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
});

export default Main