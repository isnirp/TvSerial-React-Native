import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import * as colors from "../colors";

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
const columns = 3;
const newWidth = Dimensions.get("window").width - 52;
const newHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    height: newHeight / (columns + 2),
    width: newWidth / columns,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: "transparent"
  },
  imagePlaceHolder: {
    flex: 3,
    alignSelf: "stretch"
  },
  label: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    color: colors.textColorPrimary,
    alignSelf: "stretch",
    padding: 5
  }
});
