import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Navigate, Route, Routes } from 'react-router-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Text>Sign In</Text>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>      
      {/* <RepositoryList/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
});

export default Main