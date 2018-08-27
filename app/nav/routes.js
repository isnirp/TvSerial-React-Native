import React, { Component } from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
//import { StackNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import Shows from "../components/Shows";
import ShowsDetails from "../components/ShowsDetails";

//Each screen that the navigator renders gets a navigation prop 
export const Navigator = createStackNavigator(
  {
    Shows: {
      screen: Shows
    },
    ShowsDetails: {
      screen: ShowsDetails
    }
  },
  {
    initialRouteName: "Shows"
  }
);

class Nav extends Component {
  render() {
    return (
      <Navigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.nav
});

export default connect(mapStateToProps)(Nav);
