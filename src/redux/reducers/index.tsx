import Settings from './Setting';
import CommonReducer from './CommonReducer';
import Auth from './Auth';

const reducers = {
  settings: Settings,
  auth: Auth,
  common: CommonReducer,
};

export default reducers;
