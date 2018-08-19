import { Platform, StyleSheet, Dimensions } from "react-native";

const newHeight = (Dimensions.get("window").height * 2) / 4;
export default (styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#f0f0f0"
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
    //flex: 3,
    marginRight: 16,
    marginLeft: 16
    //backgroundColor: "#ccc",
  },
  showsMetaSubject: {
    //sub meta container
    flex: 1,
    flexDirection: "row",
    paddingTop: 16
    //backgroundColor: "#ffffff",
    //alignItems: "center"
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
    flex: 4
  }
}));
