/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Shows from "./app/components/Shows";
import { Provider } from "react-redux";
import store from "./app/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Shows />
      </Provider>
    );
  }
}
