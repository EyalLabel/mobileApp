import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  AbhayaLibre_400Regular,
  AbhayaLibre_500Medium,
  AbhayaLibre_600SemiBold,
  AbhayaLibre_700Bold,
  AbhayaLibre_800ExtraBold,
} from '@expo-google-fonts/abhaya-libre';
import{useDimensions} from '@react-native-community/hooks';
import WelcomeScreen from './screens/WelcomeScreen';
import PlantsScreen from './screens/PlantsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("successful");
  let [fontsLoaded] = useFonts({
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold,
    AbhayaLibre_700Bold,
    AbhayaLibre_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
        />
        <Stack.Screen name="Plants" component={PlantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


