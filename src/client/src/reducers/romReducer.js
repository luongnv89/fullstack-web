import { createReducer } from "redux-act";
import produce from "immer";
import { setAllROMs } from "../actions";
const initState = [];

export default createReducer(
  {
    [setAllROMs]: produce((draft, roms) => (draft = roms)),
  },
  initState
);
