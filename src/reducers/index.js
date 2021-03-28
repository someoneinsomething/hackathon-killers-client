import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { navigation } from './navigation';
import { dealList } from './dealList';
import { settingsInfo } from './settingsInfo';
import { settingsUpdateTradeBudget } from './settingsUpdateTradeBudget';

export default combineReducers({
  form,
  navigation,
  dealList,
  settingsInfo,
  settingsUpdateTradeBudget,
});
