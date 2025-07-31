import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const CustomInputField = ({title}) => {
  return (
    <View className="w-72">
        <Text className="text-black text-lg font-sukar-bold ml-2 ">{title}</Text>
        <View className="h-11 border-1 w-full focus:border-2 bg-white border-form-border rounded-lg text-lg">
         <TextInput className="h-10 text-sm" />
        </View>
    </View>
  )
}

export default CustomInputField

const styles = StyleSheet.create({})