import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import styles from "../res/styles/component_details";
import TextView from "./custom/TextView";
import { connect } from "react-redux";
import * as Actions from "../actions/act_episodes";
import { bindActionCreators } from "redux";

class ShowsDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
    headerStyle: {
      height: 56,
      backgroundColor: "#ff3300"
    },
    headerTintColor: "#fff"
  });

  componentDidMount() {
    this.props.getEpisodes(this.props.navigation.state.params.item.id);
  }

  render() {
    const { item } = this.props.navigation.state.params;
    const { episodes } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imagePlaceHolder}>
            <Image
              source={{ uri: item.image.original }}
              style={styles.images}
            />
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
            <View style={styles.showsMetaEpisode}>
              <FlatList
                data={episodes}
                renderItem={({ item }) => <Text>{item.name}</Text>}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  episodes: state.tvEpisodes.episodes
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsDetails);
