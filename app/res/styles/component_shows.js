import { StyleSheet, Dimensions } from "react-native";
import * as colors from "../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.windowBackground
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16
  }
});

/*items in shows */
const columns = 3;
const newWidth = Dimensions.get("window").width - 52;
const newHeight = Dimensions.get("window").height;

const items_style = StyleSheet.create({
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

export { styles, items_style };
