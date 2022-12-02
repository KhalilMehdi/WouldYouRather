import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Would you rather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
  },
});
