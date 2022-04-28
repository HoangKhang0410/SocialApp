import React from 'react';
import { Text, View } from 'react-native-web';

const NewPostScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => alert('This is the "New Post" screen.')} style={{ fontSize: 26, fontWeight: 'bold' }}>
                New Post Screen
            </Text>
        </View>
    );
};

export default NewPostScreen;
