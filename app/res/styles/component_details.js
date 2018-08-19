import { Platform, StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff3300"
  },
  imagePlaceHolder: {
    flex: 2,
    //flexDirection: "row",
    //width: 200,
    height: 150,
    marginTop: 16,
    marginBottom: 10,
    backgroundColor: "#f0f0f0"
  },
  images: {
    flex: 1
  },
  showsMeta: {
    //main meta container
    flex: 3,
    backgroundColor: "#ccc",
    marginRight: 16,
    marginLeft: 16
  },
  showsMetaSubject: {
    //sub meta container
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingTop: 16
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
