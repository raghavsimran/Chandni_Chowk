import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import CustomInputField from '../components/CustomInputField'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const resetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground
        source={images.gradient}
        resizeMode="cover"
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-48" resizeMode='cover' />
        <Text className="text-black text-center text-2xl pt-8 pb-4 font-sukar-bold">Reset Your Password</Text>
        <Text className="text-black text-center text-lg font-sukar-regular mx-24 mb-4">Enter your new password. Remember this time!</Text>
        <CustomInputField title="Password" onChangeText={setPassword} />
        <CustomInputField title="Confirm Password" onChangeText={setConfirmPassword} />
        <CustomButton title="Submit" onPress={() => router.replace('/signIn')} />
        
      </ImageBackground>
    </SafeAreaView>
  )
}

export default resetPassword