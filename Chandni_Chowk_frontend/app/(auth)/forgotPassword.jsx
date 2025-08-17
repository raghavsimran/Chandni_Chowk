import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import CustomInputField from '../components/CustomInputField'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

const forgotPassword = () => {

  const [email, setEmail] = useState("");
  return (
    <SafeAreaView className="h-full w-full">
      <ImageBackground
        source={images.gradient}
        resizeMode="cover"
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-48" resizeMode='cover' />
        <Text className="text-black text-center text-2xl pt-8 pb-4 font-sukar-bold">Forgot Password?</Text>
        <Text className="text-black text-center text-lg font-sukar-regular mx-16">Enter your registered email below to receive an OTP and regain access to your account.</Text>
        <CustomInputField title="Email" onChangeText={setEmail} />
        <CustomButton title="Send OTP" onPress={() => router.replace('/otp')} />
        <View className="flex-row justify-center items-center mt-8">
          <Text className="font-sukar-regular">Back to</Text>
          <TouchableOpacity onPress={()=>router.replace("/signIn")}>
            <Text className="font-sukar-bold text-text-link ml-2">Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default forgotPassword

const styles = StyleSheet.create({})