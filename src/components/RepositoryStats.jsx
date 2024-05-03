import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import { parseThousands } from "../utils/parseThousands";

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.content}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars
        </StyledText>
        <StyledText align="center">
          {parseThousands(stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center">{parseThousands(forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review
        </StyledText>
        <StyledText align="center">{parseThousands(reviewCount)}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText align="center">{parseThousands(ratingAverage)}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default RepositoryStats;
