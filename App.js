import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableWithoutFeedback} from 'react-native';
import {
  useFonts,
  AbhayaLibre_400Regular,
  AbhayaLibre_500Medium,
  AbhayaLibre_600SemiBold,
  AbhayaLibre_700Bold,
  AbhayaLibre_800ExtraBold,
} from '@expo-google-fonts/abhaya-libre';
import{useDimensions} from '@react-native-community/hooks';
export default function App() {
  let [fontsLoaded] = useFonts({
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold,
    AbhayaLibre_700Bold,
    AbhayaLibre_800ExtraBold,
  });
  console.log("successful");
  return (
   
    <SafeAreaView style={styles.container}>
       <View style={styles.topper}>
      <Text style={styles.titleText}>My Plants</Text>
      <Image style={styles.plantIcon} source={require("./assets/plantIcon.png")}/>
    </View>
      <Text>I did it mom!</Text> 
      <TouchableWithoutFeedback onPress={()=>console.log("puppy")}> 
      <Image resizeMode="cover"
      source={{
        width:250,
        height:300,
        uri:"https://picsum.photos/id/237/200/300"}}/>
        </TouchableWithoutFeedback>
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
  topper:{
    position: 'absolute',
    width:414,height:97,left:0,top:69,
  },
  titleText:{
    fontFamily: 'AbhayaLibre_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 40,
    lineHeight: 40,
    left:24,
    color:'#9AB0A6'
  },
  plantIcon:{
    position:'absolute',
width: 47,
height: 47,
left: 300,
top: 0
  }
  
});
