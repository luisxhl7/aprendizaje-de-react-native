import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemsHeaders from "./RepositoryItemsHeaders";
import theme from "../theme";

const RepositoryItem = ({ repository }) => {
  return (
    <View key={repository?.id} style={styles.card}>
      <RepositoryItemsHeaders {...repository}/>
      <RepositoryStats {...repository}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
