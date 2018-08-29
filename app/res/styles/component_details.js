import { StyleSheet, Dimensions } from "react-native";
import * as colors from "../colors";

const newHeight = (Dimensions.get("window").height * 2) / 4;
export default (styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: colors.windowBackground
  },
  imagePlaceHolder: {
    //flex: 2,
    height: newHeight,
    marginTop: 1,
    marginBottom: 10
  },
  images: {
    flex: 1,
    resizeMode: "cover"
    //alignSelf: "stretch"
  },
  showsMeta: {
    //main meta container
    marginRight: 16,
    marginLeft: 16
  },
  showsMetaSubject: {
    //sub meta container
    flex: 1,
    flexDirection: "row",
    paddingTop: 16
  },
  showsMetaTitle: {
    flex: 2
  },
  showsMetaFav: {
    flex: 1,
    alignItems: "flex-end"
  },
  showsMetaSummary: {
    //sub meta container
    flex: 2
  },
  showsMetaEpisode: {
    flex: 1
  }
}));
