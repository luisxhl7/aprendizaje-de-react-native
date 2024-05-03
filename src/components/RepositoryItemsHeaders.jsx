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
      <View style={styles.contentInfo}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {id}: {fullName}
        </StyledText>
        <StyledText>Description: {description}</StyledText>
        <StyledText style={styles.language} align="center">
          language: {language}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10
  },
  language: {
    color: theme.colors.white,
    padding: 4,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 4
  },
  contentInfo: {
    flex: 1
  }
});

export default RepositoryItemsHeaders;
