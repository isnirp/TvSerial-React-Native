import React from "react";
import { StyleSheet, View, Image } from "react-native";
import TextView from "./custom/TextView";

export default props => {
  const { data, img } = props;

  return (
    <View style={styles.item}>
      <Image style={styles.imagePlaceHolder} source={{ uri: img }} />
      <View style={styles.details}>
        <TextView text={data.name} size={16} lines={1} />
        <TextView text={textValue(data.season)} />
      </View>
    </View>
  );
};

//format text
const textValue = value => {
  return "season " + value;
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1
  },
  imagePlaceHolder: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 5
  },
  details: {
    flex: 1
  }
});
