import { combineReducers } from "redux";
import showsReducer from "./showsReducer";

export default combineReducers({
  tvShow /*this exposes your states to your components as props(this.props.shows)*/: showsReducer
});
