
import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "./constants/images";
import CustomButton from "./components/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground 
        source={images.welcomeCartBg} 
        resizeMode="cover" 
        className="items-center h-full w-full"
      >
        <View className="mt-24 h-80 w-80 bg-white/60 rounded-3xl pt-8 items-center">
          <Text className="text-black text-center text-xl font-sukar-regular">Namaste from</Text>
          <Text className="text-black text-center text-5xl pt-8 pb-8 font-brittany">Chandni Chowk</Text>
          <Text className="text-black text-center text-xl font-sukar-regular">Your voice. Your story. Your shop.</Text>
          <CustomButton title="Get Started" onPress={()=>router.push("/signUp")}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
