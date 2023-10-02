import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Categories",
          headerShown: false,
        }}
        
      />
      {/* <Stack.Screen
        name="(products)"
        options={{
          title: "products",
          headerShown: false
        }}
      /> */}
    </Stack>
  );
}

const styles = StyleSheet.create({});
