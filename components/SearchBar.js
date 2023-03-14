import { useState } from "react";
import Colors from "./constants/colors";
import { TextInput, StyleSheet, View, Alert } from "react-native";
import Card from "./UI/Card";
import MainButton from "./UI/MainButton";
import { apiKey } from "../apiKey";

import axios from "axios";

function SearchBar(props) {
  const [enteredText, setEnteredText] = useState("");

  const options = {
    method: "GET",
    url: `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${enteredText}`,
    params: { term: { enteredText } },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  function responseHandler(data) {
    props.onSearch(data);
  }

  function resetButtonHandler() {
    setEnteredText("");
  }

  function textChangeHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function searchPressHandler() {
    if (enteredText === "") {
      Alert.alert("Something went wrong...", "Input field must not be empty", [
        { text: "Understood", style: "cancel" },
      ]);
      return;
    } else {
      axios
        .request(options)
        .then(function (response) {
          //responseHandler(response);

          //let jsonString = JSON.parse(response);
          responseHandler(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      setEnteredText("");
    }
  }

  return (
    <Card>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={textChangeHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <MainButton onPress={resetButtonHandler}>Reset</MainButton>
          <MainButton onPress={searchPressHandler}>Search</MainButton>
        </View>
      </View>
    </Card>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: Colors.accent500,
    height: 40,
    width: 250,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 2,
    textAlign: "center",
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginVertical: 16,
    flexDirection: "row",
  },
});
