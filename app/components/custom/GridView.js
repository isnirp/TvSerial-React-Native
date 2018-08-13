import React from "react";
import { Platform, StyleSheet, FlatList, Dimensions } from "react-native";

import Items from "../../res/styles/items_shows";

export default props => {
  let columnNum = 3;
  if (props.numColumns) {
    columnNum = props.numColumns;
  }
  const shows = props.gridData;
  return (
    <FlatList
      data={shows}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => <Items data={item} />}
      numColumns={columnNum}
    />
  );
};
