import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="products"
        options={{
          tabBarLabel: "Categories",
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: () => {
            return <AntDesign name="shoppingcart" size={24} color="black" />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => {
            return <Ionicons name="person-circle-outline" size={24} color="black" />
          },
        }}
      />
      {/* <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          href: null
        }}
      /> */}
    </Tabs>
  );
}

const styles = StyleSheet.create({});
