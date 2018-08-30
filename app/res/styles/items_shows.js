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
import TextView from "../../components/custom/TextView";

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
    alignSelf: "stretch",
    padding: 5
  }
});
