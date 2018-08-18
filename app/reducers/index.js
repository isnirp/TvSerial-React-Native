import { combineReducers } from "redux";
import showsReducer from "./showsReducer";
import navReducer from "./navReducer";

export default combineReducers({
  tvShow /*this exposes your states to your components as props(this.props.shows)*/: showsReducer,
  nav: navReducer
});
