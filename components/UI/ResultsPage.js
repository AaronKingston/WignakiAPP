import { FlatList, Text, StyleSheet, View } from "react-native";
import Card from "./Card";
import { useCallback } from "react";
import Colors from "../constants/colors";
import ResultItem from "./ResultItem";
//import { useEffect, useState } from "react";

function ResultsPage({ searchResults }) {
  const keyExtractor = useCallback((item) => `bekasok#${item.defid}`, []);

  return (
    // <View style={styles.resultsContainer}>
    <Card>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{searchResults[0].word.toUpperCase()}</Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={searchResults}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <ResultItem
            definition={item.definition}
            author={item.author}
            thumbs_up={item.thumbs_up}
            thumbs_down={item.thumbs_down}
            example={item.example}
          />
        )}
        keyExtractor={keyExtractor}
      />
    </Card>
    // </View>
  );
}

export default ResultsPage;

const styles = StyleSheet.create({
  // resultsContainer: {
  //   //flex: 1,
  //   height: "90%",
  //   marginBottom: 24,
  //   backgroundColor: "red",
  // },
  wordContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    marginBottom: 12,

    borderBottomWidth: 2,
    borderBottomColor: Colors.primary800,
  },
  word: {
    fontSize: 16,
    color: Colors.primary800,
    fontWeight: "bold",
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary800,
  },
});
