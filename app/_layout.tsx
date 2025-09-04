import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <>
      <View style={{ flex: 0, height: 40, backgroundColor: "black" }}>
        <StatusBar style="auto" />
      </View>

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default RootLayout;
