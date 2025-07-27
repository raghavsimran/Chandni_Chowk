
import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "./constants/images";

export default function Index() {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <ImageBackground 
        source={images.welcomeCartBg} 
        resizeMode="cover" 
        className="justify-center items-center h-full w-full"
      >
        <View className="h-20 w-20 bg-white">
          <Text className="text-black text-center">Test</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
