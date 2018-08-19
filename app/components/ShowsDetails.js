import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "../res/styles/component_details";
import TextView from "./custom/TextView";

class ShowsDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
    headerStyle: {
      height: 56,
      backgroundColor: "#ff3300"
    },
    color: "#ffffff"
  });
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.imagePlaceHolder}>
          <Image source={{ uri: item.image.medium }} style={styles.images} />
        </View>
        <View style={styles.showsMeta}>
          <View style={styles.showsMetaSubject}>
            <View style={styles.showsMetaTitle}>
              <TextView text={item.name} headline />
              {item.status == "Running" ? (
                <TextView text={item.status.toLowerCase()} color="green" />
              ) : (
                <TextView text={item.status.toLowerCase()} color="red" />
              )}
            </View>
            <View style={styles.showsMetaFav}>
              <Text>Favorite</Text>
            </View>
          </View>
          <View style={styles.showsMetaSummary}>
            <TextView text={item.summary} size="16" />
          </View>
        </View>
      </View>
    );
  }
}

export default ShowsDetails;
