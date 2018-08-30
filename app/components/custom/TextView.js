import React from "react";
import { Text, StyleSheet } from "react-native";
import * as colors from "../../res/colors";

//<TextView text="title" textAppearance="bold" size={16} lines={1} color="red" headline/>
export default props => {
  let fntWeight, fntSize, fntColor;
  let numLines;
  //heading
  if (props.headline) {
    fntWeight = "bold";
    fntSize = 16;
    fntColor = colors.textColorPrimary;
  } else {
    fntWeight = "normal";
    fntSize = 13;
    fntColor = colors.textColorPrimary;
  }

  //appearance bold, normal, italic
  if (props.textAppearance) {
    fntWeight = props.textAppearance;
  }
  //size
  if (props.size) {
    fntSize = props.size;
  }
  //color
  if (props.color) {
    fntColor = props.color;
  }
  //number of lines
  if (props.lines) {
    numLines = props.lines;
  }

  return (
    <Text
      style={[
        styles.base,
        {
          fontWeight: fntWeight,
          fontSize: fntSize,
          color: fntColor
        }
      ]}
      numberOfLines={numLines}
    >
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    padding: 1,
    color: colors.textColorPrimary
  }
});
