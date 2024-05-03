import React from 'react'
import { StyleSheet, View } from 'react-native'

const RepositoryStats = ({children}) => {
  return (
    <View style={styles.content}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})

export default RepositoryStats