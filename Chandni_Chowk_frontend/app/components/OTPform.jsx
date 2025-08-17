import React, { useState } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"

const OTPform = ({getOTP}) => {
    const refs = Array(6)
        .fill()
        .map(() => React.useRef());
    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleInputChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        getOTP(newOtp.join(""));

        if (text) {
            refs[index + 1]?.current?.focus();
        }

        if(!text) {
            refs[index - 1]?.current?.focus();
        }
    };
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-row justify-center items-center mt-8 mb-8">
            {otp.map((digit, index) => (
                <View
                key={index}
                className="w-12 h-14 mx-1 justify-center flex flex-row items-center bg-white rounded-xl"
                >
                    <TextInput
                        className="flex-1 text-primary font-pmedium text-2xl text-center"
                        value={digit}
                        keyboardType="numeric"
                        onChangeText={(text) => handleInputChange(text, index)}
                        textAlign="center"
                        textAlignVertical="center"
                        maxLength={1}
                        ref={refs[index]}
                        textContentType={index === 0 ? "oneTimeCode" : "none"}
                        autoComplete={index === 0 ? "sms-otp" : "off"}
                    />
                </View>
            ))}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default OTPform;