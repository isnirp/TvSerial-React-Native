import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ToolbarAndroid,
  FlatList,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
//import { GET_SHOWS } from "../actions/types";
import { getShows } from "../actions/act_shows";
import PropTypes from "prop-types";

const numColumns = 3;

class Shows extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    const { shows } = this.props;

    return (
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          title="TvAmaze"
          titleColor="#ffffff"
        />

        <FlatList
          style={{ padding: 16 }}
          data={shows}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <Image
              style={{
                width: 100,
                height: 100,
                marginBottom: 10,
                marginRight: 10
              }}
              source={{ uri: item.image.medium }}
            />
          )}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

Shows.propTypes = {
  shows: PropTypes.array.isRequired
};

//mapping the state from redux to the component Shows
const mapStateToProps = state => ({
  shows: state.tvShow.shows
});

// const mapDispatchToProps = dispatch => ({
//   getShows: () => dispatch({ type: GET_SHOWS })
// });

export default connect(
  mapStateToProps /*anything u want mapped from the redux STATES to PROPS in the component*/,
  { getShows } /*actions u want to dispatch*/
)(Shows);
//export default connect(mapStateToProps, mapDispatchToProps)(Shows);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    paddingTop: 20
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#00BCD4"
  },
  item: {
    padding: 10,
    justifyContent: "center",
    height: 100,
    width: 100
    //height: Dimensions.get("window").width / numColumns
  },
  toolbar: {
    backgroundColor: "#ff3300",
    height: 56
  }
});
