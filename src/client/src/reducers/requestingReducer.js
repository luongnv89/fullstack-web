import { createReducer } from "redux-act";

import {
  requestAllROMs, setAllROMs, setRequestFailed,
} from "../actions";

const initState = false;

export default createReducer(
  {
    [requestAllROMs]: state => true,
    [setAllROMs]: state => false,
    [setRequestFailed]: state => false,
  },
  initState
);
