import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Colors from "./components/constants/colors";
import SearchBar from "./components/SearchBar";
import ResultsPage from "./components/UI/ResultsPage";
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState();

  function setResultHandler(data) {
    setResults(data.list);
    // let obj = results.list;
    // console.log(obj);

    //console.log(data);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <SearchBar onSearch={setResultHandler} />
          {results && <ResultsPage searchResults={results}></ResultsPage>}

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent800,
  },
  innerContainer: {
    marginTop: 36,
    marginBottom: 36,
  },
});
