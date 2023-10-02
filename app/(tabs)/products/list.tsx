import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import { Button } from 'react-native-paper';

export default function products() {
  return (
    <View>
      <Text>products</Text>
      <Link href="(tabs)/products/123" asChild>
          <Button mode="contained">Product information</Button>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})