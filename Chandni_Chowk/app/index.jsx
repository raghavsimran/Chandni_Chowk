
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "./constants/images";

export default function Index() {
  return (
    <SafeAreaView className="justify-center items-center">
      <ImageBackground source={images.welcomeCartBg} resizeMode="cover" className="h-full w-full"  />
      <View className="h-20 w-20 bg-white"></View>
    </SafeAreaView>
  );
}
