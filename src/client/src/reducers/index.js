import {
  combineReducers
} from 'redux';

import romReducer from './romReducer';
import notificationReducer from './notificationReducer';
import requestingReducer from './requestingReducer';

const rootReducer = combineReducers({
  roms: romReducer,
  notify: notificationReducer,
  requesting: requestingReducer
});

export default rootReducer;
