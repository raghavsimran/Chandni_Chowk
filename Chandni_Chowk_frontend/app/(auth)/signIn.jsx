import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images' 
import { ImageBackground, View, Text } from "react-native"
import CustomButton from '../components/CustomButton'
import CustomInputField from '../components/CustomInputField'
import { useState } from 'react'
import { router } from 'expo-router'


const signUp = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground 
        source={images.gradient} 
        resizeMode="cover" 
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-48" resizeMode='cover' />
        <CustomInputField title="Email" onChangeText={setEmail} />
        <CustomInputField title="Password" onChangeText={setPassword} />
        <CustomButton title="Sign In" onPress={()=>router.push("/signIn")}/>
        <View className="flex flex-row items-center w-72 mt-4">
          <View className="border-t-[1px] h-0 mr-2 flex-grow"/>
           <Text className="font-sukar-regular">Or login using</Text>
          <View className="border-t-[1px] h-0 ml-2 flex-grow" /> 
        </View>
        <CustomButton title="Google" icon={images.google} onPress={()=>router.push("/signIn")}/>
        <View className="flex-row justify-center items-center mt-4">
          <Text className="font-sukar-regular">New User?</Text>
          <TouchableOpacity onPress={()=>router.replace("/signUp")}>
            <Text className="font-sukar-bold text-text-link ml-2">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default signUp

const styles = StyleSheet.create({})