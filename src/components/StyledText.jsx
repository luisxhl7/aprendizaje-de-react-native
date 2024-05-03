import { StyleSheet, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    textDefault: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    },
});

const StyledText = ({children, align, color, fontSize, fontWeight, style, ...restOfProps}) => {
    const textStyles = [
        styles.textDefault,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style,
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

export default StyledText