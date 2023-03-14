import { Pressable, Text, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

function MainButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={onPress} style={styles.innerContainer}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 8,
  },
  innerContainer: {
    backgroundColor: Colors.primary800,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: Colors.accent800,
  },
});
