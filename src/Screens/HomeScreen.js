import React from 'react';
import { Button, Text, View } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => alert('This is the "Home" screen.')} style={{ fontSize: 26, fontWeight: 'bold' }}>
                Home Screen
            </Text>
        </View>
    );
};

export default HomeScreen;
