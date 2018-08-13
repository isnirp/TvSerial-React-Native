import React, { Component } from "react";
import { StyleSheet, View, ToolbarAndroid } from "react-native";
import * as colors from "../../res/colors";

const toolbar = props => {
  const { title } = props;
  return (
    <ToolbarAndroid
      style={styles.toolbar}
      title={title}
      titleColor={colors.colorToolBar}
    />
  );
};

export default toolbar;

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.colorPrimary,
    height: 56
  }
});
