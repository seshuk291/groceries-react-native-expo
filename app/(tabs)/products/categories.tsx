import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import { Button } from 'react-native-paper';

export default function categories() {
  return (
    <View>
      <Text>categories!!</Text>
      <Link href="(tabs)/products/list" asChild>
          <Button mode="contained">Products</Button>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})