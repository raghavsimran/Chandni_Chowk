import {   SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded,error]= useFonts({
    "BrittanySignature": require("../assets/fonts/BrittanySignature.ttf"),
    "MsMadi-Regular": require("../assets/fonts/MsMadi-Regular.ttf"),
    "Sukar Black": require("../assets/fonts/SukarBlack.ttf"),
    "Sukar Bold": require("../assets/fonts/SukarBold.ttf"),
    "Sukar Regular": require("../assets/fonts/SukarRegular.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();

    }
  }, [fontsLoaded, error]);
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  if(!fontsLoaded && !error) {
    
  }
  

  return (
    <>
      <Stack
      screenOptions={{headerShown:false}}
      />
      <StatusBar style="inverted"/>
    </>
  );
}
