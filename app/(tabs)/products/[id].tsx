import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function productInformation() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>product_information {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})