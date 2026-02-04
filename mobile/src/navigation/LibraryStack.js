import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LibraryScreen from '../screens/LibraryScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import AddSessionScreen from '../screens/AddSessionScreen';

const Stack = createNativeStackNavigator();

export default function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{ title: 'My Library' }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{ title: 'Book Detail' }}
      />
      <Stack.Screen
        name="AddSession"
        component={AddSessionScreen}
        options={{ title: 'Add Reading Session' }}
      />
    </Stack.Navigator>
  );
}
