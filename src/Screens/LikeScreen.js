import React from 'react';
import { Text, View } from 'react-native-web';

const LikeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => alert('This is the "Like" screen.')} style={{ fontSize: 26, fontWeight: 'bold' }}>
                Like Screen
            </Text>
        </View>
    );
};

export default LikeScreen;
