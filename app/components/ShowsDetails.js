import React, { Component } from "react";
import { View, Text } from "react-native";

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
      <View>
        <Text>Hello {item.name}</Text>
      </View>
    );
  }
}

export default ShowsDetails;
