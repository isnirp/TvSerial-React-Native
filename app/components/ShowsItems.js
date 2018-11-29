import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { items_style as styles } from "../res/styles/component_shows";
import TextView from "./custom/TextView";

export default props => {
  const { data } = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.item}>
        <Image
          style={styles.imagePlaceHolder}
          source={{ uri: data.image.medium }}
        />
        <View style={styles.label}>
          <TextView text={data.name} lines={1} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
