import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Divider() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
  },
});
