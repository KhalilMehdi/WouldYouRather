import { Text } from "react-native";
import { Card } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default function Cards({
  customStyles,
  question,
  onPress,
  displayResult,
  checked,
  res,
}) {
  return (
    <Card
      onStartShouldSetResponder={onPress}
      wrapperStyle={defaultStyles}
      containerStyle={customStyles}
    >
      {displayResult && (
        <View style={styles.percentbox}>
          <Text style={styles.text}>{res}%</Text>
          {checked && <Text style={styles.text}>✓</Text>}
        </View>
      )}

      <View style={styles.questionbox}>
        <Text style={styles.text}>{question}</Text>
      </View>
    </Card>
  );
}

const defaultStyles = {
  display: "flex",
  width: 390,
  height: 300,
};

const styles = StyleSheet.create({
  questionbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  percentbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 390,
  },
  text: { fontSize: 30, color: "white" },
});
