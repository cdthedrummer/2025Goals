import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import GoalDetailScreen from './screens/GoalDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: '2025 Goals' }}
          />
          <Stack.Screen 
            name="GoalDetail" 
            component={GoalDetailScreen}
            options={{ title: 'Goal Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}