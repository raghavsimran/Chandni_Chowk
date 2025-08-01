import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import images from '../constants/images'

const CustomButton = ({icon,title, onPress}) => {
  return (
   <TouchableOpacity className="w-40 h-12 bg-orange-300 items-center justify-center rounded-full mt-6" activeOpacity={0.7} onPress={onPress}> 
       <LinearGradient colors={["#ff66c4","#ffde59"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: '100%', height: '100%', borderRadius: 9999, alignItems: 'center', justifyContent: 'center' }}>
        <View className="flex-row items-center gap-1">
         {icon &&<Image source={icon} className="h-6 w-6 "/>}
         <Text className="text-white text-2xl font-sukar-bold">{title}</Text>
        </View>
       </LinearGradient>
   </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})