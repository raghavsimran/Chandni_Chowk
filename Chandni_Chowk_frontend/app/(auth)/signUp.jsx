import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images' 
import { ImageBackground, View, Text } from "react-native"
import CustomButton from '../components/CustomButton'
import CustomInputField from '../components/CustomInputField'
import { useState } from 'react'
import { router } from 'expo-router'


const signUp = () => {
  const [name,setName] = useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[rePassword,setRePassword]=useState("");

  return (
    <SafeAreaView className="h-full w-full">
      <ImageBackground 
        source={images.gradient} 
        resizeMode="cover" 
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-48" resizeMode='cover' />
        <CustomInputField title="Name" onChangeText={setName}/>
        <CustomInputField title="Email" onChangeText={setEmail} />
        <CustomInputField title="Password" onChangeText={setPassword} />
        <CustomInputField title="Confirm Password" onChangeText={setRePassword}/>
        <CustomButton title="Sign Up" onPress={()=>router.push("/signIn")}/>
        <View className="flex-row justify-center items-center mt-4">
          <Text className="font-sukar-regular">Already have an account?</Text>
          <TouchableOpacity onPress={()=>router.replace("/signIn")}>
            <Text className="font-sukar-bold text-text-link ml-2">Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default signUp

const styles = StyleSheet.create({})