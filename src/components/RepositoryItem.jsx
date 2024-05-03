import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import RepositoryItemsHeaders from "./RepositoryItemsHeaders";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryItem = ({ repository }) => {
  return (
    <View key={repository?.id} style={styles.card}>
      <RepositoryItemsHeaders {...repository}/>
      <RepositoryStats>
        <View>
          <StyledText align="center" fontWeight="bold">
            Stars
          </StyledText>
          <StyledText align="center">
            {parseThousands(repository?.stargazersCount)}
          </StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            Forks
          </StyledText>
          <StyledText align="center">
            {parseThousands(repository?.forksCount)}
          </StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            Review
          </StyledText>
          <StyledText align="center">
            {parseThousands(repository?.reviewCount)}
          </StyledText>
        </View>
        <View>
          <StyledText align="center" fontWeight="bold">
            Rating
          </StyledText>
          <StyledText align="center">
            {parseThousands(repository?.ratingAverage)}
          </StyledText>
        </View>
      </RepositoryStats>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    color: theme.colors.white,
    padding: 4,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    justifyContent: "space-",
  },

});

export default RepositoryItem;
