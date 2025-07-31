import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images' 
import { ImageBackground, View, Text } from "react-native"
import CustomButton from '../components/CustomButton'
import CustomInputField from '../components/CustomInputField'

const signUp = () => {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground 
        source={images.gradient} 
        resizeMode="cover" 
        className="items-center h-full w-full"
      >
        <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany mt-10">Chandni Chowk</Text>
        <Image source={images.wardrobe} className="w-60 h-60" />
        <CustomInputField title="Name" />
        <CustomButton title="Sign Up" onPress={()=>router.push("/signIn")}/>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default signUp

const styles = StyleSheet.create({})