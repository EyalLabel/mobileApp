import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableWithoutFeedback, Button} from 'react-native';
import {
  useFonts,
  AbhayaLibre_400Regular,
  AbhayaLibre_500Medium,
  AbhayaLibre_600SemiBold,
  AbhayaLibre_700Bold,
  AbhayaLibre_800ExtraBold,
} from '@expo-google-fonts/abhaya-libre';
function WelcomeScreen(props) {
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
        <SafeAreaView style={styles.container}>
       <View style={styles.topper}>
      <Text style={styles.titleText}>Welcome!</Text>
      <Image style={styles.plantIcon} source={require("../assets/plantIcon.png")}/>
    </View>
    <View>
      <Button title='plants'/>
    </View>
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
  
export default WelcomeScreen;