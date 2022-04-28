import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LikeScreen from '../Screens/LikeScreen';
import SearchScreen from '../Screens/SearchScreen';

const homeName = 'Home';
const searchName = 'Search';
const likeName = 'Like';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeName = route.name;
                        if (routeName === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (routeName === searchName) {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (routeName === likeName) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (routeName === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 },
                }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name={searchName} component={SearchScreen} options={{ headerShown: false }} />
                <Tab.Screen name={likeName} component={LikeScreen} options={{ headerShown: false }} />
                <Tab.Screen name={profileName} component={ProfileScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
