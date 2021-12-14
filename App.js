import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';

export default function App() {
  let x=29;
  console.log("successful");
  return (
    <SafeAreaView style={styles.container}>
      <Text>I did it mom!</Text>
      <Image source={require("./assets/icon.png")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
