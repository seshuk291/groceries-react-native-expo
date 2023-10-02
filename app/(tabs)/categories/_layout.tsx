import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from "expo-router";

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name='categories'></Stack.Screen>
        <Stack.Screen name='products'></Stack.Screen>
        <Stack.Screen name='product_information'></Stack.Screen>
    </Stack>
  )
}

const styles = StyleSheet.create({})