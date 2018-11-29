import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
//import { GET_SHOWS } from "../actions/types";
import { getShows } from "../actions/act_shows";
import PropTypes from "prop-types";
//import styles from "../res/styles/component_shows";
import { styles } from "../res/styles/component_shows";
import Toolbar from "./custom/ToolBar";
import Items from "../res/styles/items_shows";

class Shows extends Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    const { shows } = this.props;
    let columns = 3;
    return (
      <View style={styles.container}>
        <Toolbar title="TvAmaze" />
        <View style={styles.content}>
          <FlatList
            data={shows}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <Items
                onPress={() =>
                  this.props.navigation.navigate(
                    "ShowsDetails",
                    /*params */ {
                      item
                    }
                  )
                }
                data={item}
              />
            )}
            numColumns={columns}
          />
        </View>
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

//export default connect(mapStateToProps, mapDispatchToProps)(Shows);

export default connect(
  mapStateToProps /*anything u want mapped from the redux STATES to PROPS in the component*/,
  { getShows } /*actions u want to dispatch*/
)(Shows);
