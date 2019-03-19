import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>{children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
