import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="categories" options={{headerShown: true, headerTitle: 'Categories'}}></Stack.Screen>
      <Stack.Screen name="list" options={{headerShown: true, headerTitle: 'Products list'}}></Stack.Screen>
      <Stack.Screen name="[id]" options={{headerShown: true, title: '', headerTitle: 'product information'}} />
    </Stack>
  );
}
