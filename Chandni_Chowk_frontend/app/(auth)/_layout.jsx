import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signUp" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="forgotPassword" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="resetPassword" />
      </Stack>
      <StatusBar style="inverted" />
    </>
  );
}