import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import LibraryStack from './LibraryStack';

const Tab = createBottomTabNavigator();

// Pantallas placeholder por ahora
function StatsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>📊 Stats</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>👤 Profile</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LibraryTab"
        component={LibraryStack}
        options={{ title: 'Library' }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StatsScreen}
        options={{ title: 'Stats' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
