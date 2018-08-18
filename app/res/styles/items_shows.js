import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default props => {
  const { data } = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.item}>
        <Image
          style={styles.imagePlaceHolder}
          source={{ uri: data.image.medium }}
        />
        <Text style={styles.label}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

//trim label
const textValue = value => {};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: 150,
    width: 100,
    padding: 1,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: "#cecece"
    //height: Dimensions.get("window").width / numColumns
  },
  imagePlaceHolder: {
    flex: 3
  },
  label: {
    flex: 1,
    backgroundColor: "#ff3300",
    color: "#ffffff"
  }
});
