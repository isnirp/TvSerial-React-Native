import { StyleSheet } from "react-native";
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

export default styles;
