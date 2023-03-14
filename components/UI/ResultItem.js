import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

function ResultItem({ author, thumbs_up, thumbs_down, definition }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={{ color: Colors.primary500 }}>{definition}</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.thumbsContainer}>
          <View style={styles.thumb}>
            <Ionicons
              name="thumbs-up"
              alignSelf="center"
              size={18}
              color={Colors.primary800}
            />
            <Text style={[styles.thumbsNumber, { color: "green" }]}>
              {thumbs_up}
            </Text>
          </View>
          <View style={styles.thumb}>
            <Ionicons
              name="thumbs-down"
              alignSelf="center"
              size={18}
              color={Colors.primary800}
            />
            <Text style={[styles.thumbsNumber, { color: "red" }]}>
              {thumbs_down}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.authorText}>{`- ${author}`}</Text>
      </View>
    </View>
  );
}

export default ResultItem;

const styles = StyleSheet.create({
  container: { margin: 8 },
  topContainer: {
    flexDirection: "row",
    //height: 180,
    marginVertical: 8,
  },
  bottomContainer: {},
  authorText: {
    marginTop: 4,
    textAlign: "right",
    fontStyle: "italic",
    color: Colors.primary800,
  },
  contentContainer: {
    flex: 1,
    paddingRight: 8,
  },
  thumbsContainer: {
    alignItems: "center",
    //justifyContent: "center",
    width: 40,
  },
  thumbsNumber: {
    fontSize: 12,
  },
  thumb: {
    alignItems: "center",
    justifyContent: "center",
  },
});
