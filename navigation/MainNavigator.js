import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ListNavigator from './ListNavigator';

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					// if (route.name === 'Search') {
					//     if (Platform.OS === 'android') {
					//         iconName = focused ? 'search' : 'search-outline';
					//     } else if (Platform.OS === 'ios') {
					//         iconName = focused ? 'ios-search' : 'ios-search-outline';
					//     }
					// } else if (route.name === 'Top 100') {
					if (route.name === 'Top 100') {
						if (Platform.OS === 'android') {
							iconName = focused ? 'stats-chart' : 'stats-chart-outline';
						} else if (Platform.OS === 'ios') {
							iconName = focused ? 'ios-stats-chart' : 'ios-stats-chart-outline';
						}
						// } else if (route.name === 'Add') {
						//     if (Platform.OS === 'android') {
						//         iconName = focused ? 'add' : 'add-outline';
						//     } else if (Platform.OS === 'ios') {
						//         iconName = focused ? 'ios-add' : 'ios-add-outline';
						//     }
						// } else if (route.name === 'Favorites') {
						//     if (Platform.OS === 'android') {
						//         iconName = focused ? 'star' : 'star-outline';
						//     } else if (Platform.OS === 'ios') {
						//         iconName = focused ? 'ios-star' : 'ios-star-outline';
						//     }
						// } else if (route.name === 'More') {
						//     if (Platform.OS === 'android') {
						//         iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
						//     } else if (Platform.OS === 'ios') {
						//         iconName = focused ? 'ios-ellipsis-horizontal' : 'ios-ellipsis-horizontal-outline';
						//     }
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				{/* <Tab.Screen name="Search" /> */}
				<Tab.Screen name="Top 100" component={ListNavigator} />
				{/* <Tab.Screen name="Add" />
                <Tab.Screen name="Favourites" />
                <Tab.Screen name="More" /> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
};
