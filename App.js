import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DiceScreen } from './screens/DiceScreen';
import { DevScreen } from './screens/DevScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dice') {
              iconName = focused
                ? 'dice-d20'
                : 'dice-d20';
            } else if (route.name === 'Dev') {
              iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Dice" component={DiceScreen} />
        <Tab.Screen name="Dev" component={DevScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
