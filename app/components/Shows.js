import React, { Component } from "react";
import { Platform, View } from "react-native";
import { connect } from "react-redux";
//import { GET_SHOWS } from "../actions/types";
import { getShows } from "../actions/act_shows";
import PropTypes from "prop-types";
import styles from "../res/styles/component_shows";
import Toolbar from "./custom/ToolBar";
import GridView from "./custom/GridView";

class Shows extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    const { shows } = this.props;
    return (
      <View style={styles.container}>
        <Toolbar title="TvAmaze" />
        <View style={styles.content}>
          <GridView gridData={shows} />
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

export default connect(
  mapStateToProps /*anything u want mapped from the redux STATES to PROPS in the component*/,
  { getShows } /*actions u want to dispatch*/
)(Shows);
//export default connect(mapStateToProps, mapDispatchToProps)(Shows);
