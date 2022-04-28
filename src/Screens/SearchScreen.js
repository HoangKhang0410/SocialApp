import React from 'react';
import { Text, View } from 'react-native-web';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => alert('This is the "Search" screen.')} style={{ fontSize: 26, fontWeight: 'bold' }}>
                Search Screen
            </Text>
        </View>
    );
};

export default SearchScreen;
