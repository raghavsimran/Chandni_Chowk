
import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "./constants/images";

export default function Index() {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground 
        source={images.welcomeCartBg} 
        resizeMode="cover" 
        className="items-center h-full w-full"
      >
        <View className="mt-24 h-80 w-80 opacity-60 bg-white rounded-3xl pt-8 items-center">
          <Text className="text-black text-center text-lg">Namaste from</Text>
          <Text className="text-black text-center text-3xl pt-6 pb-6 font-bold font-madi">Chandni Chowk</Text>
          <Text className="text-black text-center text-lg">Your voice. Your story.Your shop.</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
