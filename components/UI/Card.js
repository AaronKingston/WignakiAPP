import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent500,
    borderRadius: 8,
    borderColor: Colors.primary800,
    borderWidth: 2,

    //android only shadow property below
    elevation: 8,

    //iphone only shadow properties below
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    //MARGIN AROUND
    marginTop: 8,
    marginHorizontal: 8,

    //PADDING
    padding: 8,
  },
});
