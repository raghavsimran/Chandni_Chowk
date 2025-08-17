import { router } from 'expo-router'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import OTPform from '../components/OTPform'
import images from '../constants/images'
import { useState } from 'react'

const otp = () => {
    const [otp, setOtp] = useState("");
  return (
      <SafeAreaView className="h-full w-full">
      <ImageBackground
        source={images.gradient}
        resizeMode="cover"
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-48" resizeMode='cover' />
        <Text className="text-black text-center text-2xl pt-8 pb-4 font-sukar-bold">Verify Your OTP</Text>
        <Text className="text-black text-center text-lg font-sukar-regular mx-16">Enter the OTP sent to your registered email to verify your identity and continue securely.</Text>
        <OTPform getOTP={setOtp} />
        <CustomButton title="Continue" onPress={() => router.replace('/resetPassword')} />
        <View className="flex-row justify-center items-center mt-8">
          <Text className="font-sukar-regular">Didn't receive it?</Text>
          <TouchableOpacity onPress={()=>router.replace("/signIn")}>
            <Text className="font-sukar-bold text-text-link ml-2">Resend</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default otp