import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: '#000',
        fontSize: 20
    }
};

export { Header };
