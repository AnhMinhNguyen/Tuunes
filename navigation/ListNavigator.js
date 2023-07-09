import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const ListStack = createStackNavigator();

export default ListNavigator = () => {
  return (
    <ListStack.Navigator initialRouteName="Top 100" screenOptions={{
      headerStyle: { height: 50 },
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="Detail" component={DetailScreen} />
    </ListStack.Navigator>
  );
};
