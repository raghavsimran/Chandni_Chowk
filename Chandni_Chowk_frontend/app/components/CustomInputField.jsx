import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const CustomInputField = ({title,onChangeText}) => {
  return (
    <View className="w-72 my-1">
      <Text className="text-black text-lg font-sukar-bold ml-2 ">{title}</Text>
      <View className="w-full h-12">
        <TextInput 
          className="px-4 h-full border-1 w-full focus:border-2 bg-white border-form-border rounded-lg font-sukar-regular text-lg " 
          style={{textAlignVertical: 'center'}} 
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

export default CustomInputField

const styles = StyleSheet.create({})