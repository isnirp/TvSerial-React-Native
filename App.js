/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Nav, { Navigator } from "./app/nav/routes";
import component_details from "./app/res/styles/component_details";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

/*
tips for react development
 */
/*use functional component_details
-if u dont need state (stateless)
-No THIS binding
-less code
-easy to test

keep components small
-reusability

handle this bindings
-bind in the constructor
-use arrow functions
--this is to ensure that the function isnt created every time render is called

use a function in setState not an object
-state changes may not apply immediately
-this.setState((prevState, props)=>{return data: !prevState.data})

use prop-types*/
