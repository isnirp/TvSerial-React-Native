import React from "react";
import { StyleSheet, View, Image } from "react-native";
import TextView from "../../components/custom/TextView";

export default props => {
  const { data, img } = props;

  return (
    <View style={styles.item}>
      {/* {data.image.medium && (
        <Image
          style={styles.imagePlaceHolder}
          source={{ uri: data.image.medium }}
        />
      )} */}
      <Image style={styles.imagePlaceHolder} source={{ uri: img }} />
      <View style={styles.details}>
        <TextView text={data.name} textAppearance="bold" size="16" headline />
        <TextView text={data.season} size="13" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  imagePlaceHolder: {
    height: 50,
    width: 50
  },
  details: {
    flex: 1
  }
});
