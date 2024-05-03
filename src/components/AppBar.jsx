import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme';

const AppBarTab = ({ children, to}) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
    <View style={ styles.appBar}>
        <ScrollView horizontal style={ styles.scroll } >
            <AppBarTab to='/'>Repositories</AppBarTab>
            <AppBarTab to='/signin'>Sign in</AppBarTab>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 10,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})

export default AppBar