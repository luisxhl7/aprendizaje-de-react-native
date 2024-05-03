import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

const RepositoryItemsHeaders = ({
  ownerAvatarUrl,
  id,
  fullName,
  description,
  language,
}) => {

  return (
    <View style={styles.content}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      <StyledText fontSize="subheading" fontWeight="bold">
        {id}: {fullName}
      </StyledText>
      <StyledText>Description: {description}</StyledText>
      <StyledText style={styles.language} align="center">
        language: {language}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItemsHeaders;
