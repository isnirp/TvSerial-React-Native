import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import styles from "../res/styles/component_details";
import EpisodeItems from "./EpisodeItems";
import TextView from "./custom/TextView";
import { connect } from "react-redux";
import * as Actions from "../actions/act_episodes";
import * as colors from "../res/colors";
import { bindActionCreators } from "redux";

class ShowsDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
    headerStyle: {
      height: 56,
      backgroundColor: colors.colorPrimary
    },
    headerTintColor: colors.colorToolBar
  });

  componentDidMount() {
    this.props.getEpisodes(this.props.navigation.state.params.item.id);
  }

  render() {
    const { item } = this.props.navigation.state.params;
    const { episodes } = this.props;
    const imgDefault = item.image.medium;
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
              <TextView text={item.summary} size={16} />
            </View>
          </View>
          <View style={styles.showsEpisodes}>
            <FlatList
              data={episodes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <EpisodeItems data={item} img={imgDefault} />
              )}
            />
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
